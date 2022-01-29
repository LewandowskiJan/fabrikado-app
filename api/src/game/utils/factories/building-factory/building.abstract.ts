import { Building } from './../../../../game/modules/buildings/building';
import { BuildingOptions } from './../../models/config-types/building-options';
import {
  ResourceCapacity,
  ResourceProduction,
} from './../../models/config-types/rule/cost.type';
import { ResourceBuildingRuleConfiguration } from './../../models/config-types/rule/resource-building-rule-configuration';
import { Cost } from './../../models/cost';
import { BuildingType } from './../../models/enums/building-type';
import { OnUpdateCost } from './../../models/on-update-cost';
import { Requirements } from './../../models/requirements';
import { Resource } from './../../models/resource';
import { RequirementUtilService } from './../../services/requirement-util.service';

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
    resourceBuildingRuleConfiguration: ResourceBuildingRuleConfiguration
  ) {
    this.type = buildingOption.type;
    this.level = buildingOption.level;
    this.name = buildingOption.name;
    this.averageTemperature = buildingOption.averageTemperature;

    this.baseCost = resourceBuildingRuleConfiguration.baseCost;
    this.requirements = resourceBuildingRuleConfiguration.requirements;
    this.upgradeCostFn = resourceBuildingRuleConfiguration.upgradeCostFn;
    this.upgradeMiningValueFn =
      resourceBuildingRuleConfiguration.upgradeMiningValueFn;
    this.upgradeEnergyConsumeValueFn =
      resourceBuildingRuleConfiguration.upgradeEnergyConsumeValueFn;
    this.upgradeDeuteriumConsumeValueFn =
      resourceBuildingRuleConfiguration.upgradeDeuteriumConsumeValueFn;
    this.upgradeStorageCapacityFn =
      resourceBuildingRuleConfiguration.upgradeStorageCapacityFn;
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
