import { Resource } from '@game/planet/resources/resource';

import { Building } from '../building';
import { BuildingOptions } from '../building.factory';
import { BuildingType } from '../configuration/buildingType';
import {
  Cost,
  ResourceBuildingConfiguration,
  ResourceProduction,
} from './../../game-configuration.map';
import { ResourcesUtil } from './../../planet/resources/resources-util';

export interface BuildingRequirement {
  type: BuildingType;
  level: number;
}

export interface OnUpdateCost {
  buildingCost: Resource;
  buildingTime: number;
}

export abstract class BuildingAbstract {
  public type: BuildingType;
  public level: number;
  public name: string;
  public averageTemperature: number;

  public miningResource: Resource;
  public energyConsume: number;

  public nextLevelBuildingRequirements: BuildingRequirement[];
  public nextLevelCosts: Resource;
  public nextLevelBuildingTime: number = 5;

  public onNextLevelUpgrade: boolean;
  public upgradingTimeLeft: number;

  public baseCost: Resource;
  public upgradeCostFn: (level: number) => Cost;
  public upgradeMiningValueFn: (
    level: number,
    averageTemperature
  ) => ResourceProduction;
  public upgradeEnergyConsumeValueFn: (level: number) => number;

  constructor(
    buildingOption: BuildingOptions,
    resourceBuildingConfiguration: ResourceBuildingConfiguration
  ) {
    this.type = buildingOption.type;
    this.level = buildingOption.level;
    this.name = buildingOption.name;
    this.averageTemperature = buildingOption.averageTemperature;

    this.baseCost = resourceBuildingConfiguration.baseCost;
    this.upgradeCostFn = resourceBuildingConfiguration.upgradeCostFn;
    this.upgradeMiningValueFn =
      resourceBuildingConfiguration.upgradeMiningValueFn;
    this.upgradeEnergyConsumeValueFn =
      resourceBuildingConfiguration.upgradeEnergyConsumeValueFn;

    this.setupUpdateRequirement();
  }

  public upgrade(
    currentResources: Resource,
    currentBuildings: Building[]
  ): OnUpdateCost {
    if (this.onNextLevelUpgrade) {
      return undefined;
    } else if (this.canUpdate(currentResources, currentBuildings)) {
      this.onNextLevelUpgrade = true;
      this.upgradingTimeLeft = this.nextLevelBuildingTime;

      return {
        buildingCost: this.nextLevelCosts,
        buildingTime: this.nextLevelBuildingTime,
      };
    } else {
      return undefined;
    }
  }

  public decrementUpgradeTime(): boolean {
    if (this.onNextLevelUpgrade && this.upgradingTimeLeft === 0) {
      return true;
    } else if (this.upgradingTimeLeft > 0) {
      this.upgradingTimeLeft--;
      return false;
    } else {
      return false;
    }
  }

  public finishUpdate(): void {
    this.level++;
    this.setupUpdateRequirement();
    this.upgradingTimeLeft = 5;
    this.onNextLevelUpgrade = false;
  }

  public setupUpdateRequirement(): void {
    this.nextLevelCosts = this.upgradeCostFn(this.level);
    this.miningResource = this.upgradeMiningValueFn(
      this.level,
      this.averageTemperature
    );
    this.energyConsume = this.upgradeEnergyConsumeValueFn(this.level);
  }

  public canUpdate(
    currentResources: Resource,
    currentBuildings: Building[]
  ): boolean {
    const requirements: boolean[] = [];
    if (
      this.nextLevelBuildingRequirements &&
      this.nextLevelBuildingRequirements.length !== 0
    ) {
      currentBuildings.forEach((currentBuilding: Building) => {
        const requireBuilding: BuildingRequirement | undefined =
          this.nextLevelBuildingRequirements.find(
            (building: Building) => currentBuilding.type === building.type
          );

        requireBuilding
          ? requirements.push(requireBuilding.level < currentBuilding.level)
          : requirements.push(false);
      });
    }
    requirements.push(
      ResourcesUtil.checkResourcesRequirements(
        currentResources,
        this.nextLevelCosts
      )
    );

    return requirements.every(Boolean);
  }
}
