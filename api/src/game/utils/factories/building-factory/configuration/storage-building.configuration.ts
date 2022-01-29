import {
  ResourceCapacity,
  ResourceProduction,
} from './../../../models/config-types/rule/cost.type';
import { ResourceBuildingRuleConfiguration } from './../../../models/config-types/rule/resource-building-rule-configuration';
import { Cost } from './../../../models/cost';
import { BuildingType } from './../../../models/enums/building-type';

export const crystalStorageConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.CRYSTAL_STORAGE,
  {
    baseCost: {
      metal: 1000,
      crystal: 500,
      energy: 0,
      deuterium: 0,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(500 * Math.pow(2, lvl)),
        crystal: Math.ceil(250 * Math.pow(2, lvl)),
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeMiningValueFn: (): ResourceProduction => {
      return {
        crystal: 0,
        metal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeEnergyConsumeValueFn: (): number => 0,
    upgradeDeuteriumConsumeValueFn: (): number => 0,
    upgradeStorageCapacityFn: (lvl: number): ResourceCapacity => {
      return {
        metal: 0,
        crystal: 5000 * Math.floor(2.5 * Math.exp((20 / 33) * lvl)),
        energy: 0,
        deuterium: 0,
      };
    },
  },
];

export const metalStorageConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.METAL_STORAGE,
  {
    baseCost: {
      metal: 1000,
      crystal: 0,
      energy: 0,
      deuterium: 0,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(1000 * Math.pow(2, lvl)),
        crystal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeMiningValueFn: (): ResourceProduction => {
      return {
        crystal: 0,
        metal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeEnergyConsumeValueFn: (): number => 0,
    upgradeDeuteriumConsumeValueFn: (): number => 0,
    upgradeStorageCapacityFn: (lvl: number): ResourceCapacity => {
      return {
        metal: 5000 * Math.floor(2.5 * Math.exp((20 / 33) * lvl)),
        crystal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
  },
];

export const deuteriumTankConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.DEUTERIUM_TANK,
  {
    baseCost: {
      metal: 1000,
      crystal: 1000,
      energy: 0,
      deuterium: 0,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(1000 * Math.pow(2, lvl)),
        crystal: Math.ceil(1000 * Math.pow(2, lvl)),
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeMiningValueFn: (): ResourceProduction => {
      return {
        crystal: 0,
        metal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeEnergyConsumeValueFn: (): number => 0,
    upgradeDeuteriumConsumeValueFn: (): number => 0,
    upgradeStorageCapacityFn: (lvl: number): ResourceCapacity => {
      return {
        metal: 0,
        crystal: 0,
        energy: 0,
        deuterium: 5000 * Math.floor(2.5 * Math.exp((20 / 33) * lvl)),
      };
    },
  },
];
