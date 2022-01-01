import { ResourcesUtilService } from '../../utils/resources-util.service';
import { Building } from '../building';
import { BuildingOptions } from '../building.factory';
import { BuildingType } from '../configuration/buildingType';
import {
  Cost,
  ResourceBuildingConfiguration,
  ResourceCapacity,
  ResourceProduction,
} from './../../game-configuration.map';
import { Resource } from './../../planet/resources/resource';

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

  public deuteriumConsumption: number;
  public capacity: ResourceCapacity;

  public baseCost: Resource;
  public upgradeCostFn: (level: number) => Cost;
  public upgradeMiningValueFn: (
    level: number,
    averageTemperature
  ) => ResourceProduction;
  public upgradeEnergyConsumeValueFn: (level: number) => number;
  public upgradeDeuteriumConsumeValueFn: (level: number) => number;
  public upgradeStorageCapacityFn: (level: number) => ResourceCapacity;

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
    this.upgradeDeuteriumConsumeValueFn =
      resourceBuildingConfiguration.upgradeDeuteriumConsumeValueFn;
    this.upgradeStorageCapacityFn =
      resourceBuildingConfiguration.upgradeStorageCapacityFn;

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

  public finishUpdate(): boolean {
    this.level++;
    this.setupUpdateRequirement();
    this.upgradingTimeLeft = 5;
    this.onNextLevelUpgrade = false;
    return true;
  }

  public setupUpdateRequirement(): void {
    this.nextLevelCosts = this.upgradeCostFn(this.level);
    this.miningResource =
      this.upgradeMiningValueFn &&
      this.upgradeMiningValueFn(this.level, this.averageTemperature);
    this.energyConsume =
      this.upgradeEnergyConsumeValueFn &&
      this.upgradeEnergyConsumeValueFn(this.level);
    this.deuteriumConsumption =
      this.upgradeDeuteriumConsumeValueFn &&
      this.upgradeDeuteriumConsumeValueFn(this.level);
    this.capacity =
      this.upgradeStorageCapacityFn &&
      this.upgradeStorageCapacityFn(this.level);
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
      ResourcesUtilService.checkResourcesRequirements(
        currentResources,
        this.nextLevelCosts
      )
    );

    return requirements.every(Boolean);
  }
}
