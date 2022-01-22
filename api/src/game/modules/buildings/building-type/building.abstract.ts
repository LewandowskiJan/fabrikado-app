import {
  Cost,
  ResourceBuildingConfiguration,
  ResourceCapacity,
  ResourceProduction,
} from '../../../game-configuration.map';
import { Requirements } from '../../../model/requirements/requirements';
import { RequirementUtilService } from '../../../utils/requirement-util.service';
import { Resource } from '../../shared/resources/resource';
import { Building } from './../building';
import { BuildingOptions } from './../building.factory';
import { BuildingType } from './../configuration/buildingType';

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

  public requirements: Requirements;
  public requirementsArray: any[];
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
    this.requirements = resourceBuildingConfiguration.requirements;
    this.upgradeCostFn = resourceBuildingConfiguration.upgradeCostFn;
    this.upgradeMiningValueFn =
      resourceBuildingConfiguration.upgradeMiningValueFn;
    this.upgradeEnergyConsumeValueFn =
      resourceBuildingConfiguration.upgradeEnergyConsumeValueFn;
    this.upgradeDeuteriumConsumeValueFn =
      resourceBuildingConfiguration.upgradeDeuteriumConsumeValueFn;
    this.upgradeStorageCapacityFn =
      resourceBuildingConfiguration.upgradeStorageCapacityFn;
    this.setupRequirementArray();
    this.setupUpdateRequirement();
  }

  public upgrade(
    currentBuilding: Building,
    currentResources: Resource,
    currentPlanetBuildings: Building[]
  ): OnUpdateCost {
    if (this.onNextLevelUpgrade) {
      return undefined;
    } else if (
      this.canUpdate(currentBuilding, currentResources, currentPlanetBuildings)
    ) {
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

  private canUpdate(
    currentBuilding: Building,
    currentResources: Resource,
    currentPlanetBuildings: Building[]
  ): boolean {
    return (
      RequirementUtilService.areRequirementsFulfilled(
        currentBuilding.requirements,
        currentPlanetBuildings
      ) &&
      RequirementUtilService.haveEnoughResources(
        currentBuilding.nextLevelCosts,
        currentResources
      )
    );
  }

  private setupRequirementArray(): void {
    const array: any[] = [];
    this.requirements.forEach((value: number, key: BuildingType) => {
      array.push({ [key]: value });
    });

    this.requirementsArray = array;
  }
}
