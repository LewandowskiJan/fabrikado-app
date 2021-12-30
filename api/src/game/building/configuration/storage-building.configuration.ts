import {
  Cost,
  ResourceBuildingConfiguration,
  ResourceCapacity,
  ResourceProduction,
} from '../../game-configuration.map';
import { BuildingType } from './buildingType';

export const crystalStorageConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.CRYSTAL_STORAGE,
  {
    baseCost: {
      metal: 1000,
      crystal: 500,
      energy: 0,
      deuterium: 0,
    },
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
  ResourceBuildingConfiguration
] = [
  BuildingType.METAL_STORAGE,
  {
    baseCost: {
      metal: 1000,
      crystal: 0,
      energy: 0,
      deuterium: 0,
    },
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
  ResourceBuildingConfiguration
] = [
  BuildingType.DEUTERIUM_TANK,
  {
    baseCost: {
      metal: 1000,
      crystal: 1000,
      energy: 0,
      deuterium: 0,
    },
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
