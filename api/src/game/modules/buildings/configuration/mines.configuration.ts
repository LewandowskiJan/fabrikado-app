import { ACCELERATION } from './../../../configuration/globals-variables';
import {
  Cost,
  ResourceBuildingConfiguration,
  ResourceProduction,
} from './../../../game-configuration.map';
import { ResourceCapacity } from './../../../game-configuration.map';
import { BuildingType } from './buildingType';

export const crystalMineConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.CRYSTAL_MINE,
  {
    baseCost: {
      metal: 48,
      crystal: 24,
      energy: 0,
      deuterium: 0,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(48 * Math.pow(1.6, lvl - 1)),
        crystal: Math.ceil(24 * Math.pow(1.6, lvl - 1)),
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeMiningValueFn: (lvl: number): ResourceProduction => {
      return {
        crystal: Math.ceil(ACCELERATION * 20 * lvl * Math.pow(1.1, lvl)),
        metal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeEnergyConsumeValueFn: (lvl: number): number =>
      Math.ceil(10 * lvl * Math.pow(1.1, lvl)),
    upgradeDeuteriumConsumeValueFn: (): number => 0,
    upgradeStorageCapacityFn: (): ResourceCapacity => {
      return {
        crystal: 0,
        metal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
  },
];

export const deuteriumSynthesizerConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.DEUTERIUM_SYNTHESIZER,
  {
    baseCost: {
      metal: 225,
      crystal: 75,
      energy: 0,
      deuterium: 0,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(225 * Math.pow(1.5, lvl - 1)),
        crystal: Math.ceil(75 * Math.pow(1.5, lvl - 1)),
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeMiningValueFn: (
      lvl: number,
      averagePlanetTemperature?: number
    ): ResourceProduction => {
      return {
        crystal: 0,
        metal: 0,
        energy: 0,
        deuterium: Math.ceil(
          ACCELERATION *
            (10 * lvl * Math.pow(1.5, lvl - 1)) *
            (1.36 - 0.004 * averagePlanetTemperature)
        ),
      };
    },
    upgradeEnergyConsumeValueFn: (lvl: number): number =>
      Math.ceil(10 * lvl * Math.pow(1.1, lvl)),
    upgradeDeuteriumConsumeValueFn: (): number => 0,
    upgradeStorageCapacityFn: (): ResourceCapacity => {
      return {
        crystal: 0,
        metal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
  },
];

export const metalMineConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.METAL_MINE,
  {
    baseCost: {
      metal: 60,
      crystal: 15,
      energy: 0,
      deuterium: 0,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(60 * Math.pow(1.5, lvl - 1)),
        crystal: Math.ceil(15 * Math.pow(1.5, lvl - 1)),
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeMiningValueFn: (lvl: number): ResourceProduction => {
      return {
        crystal: 0,
        metal: Math.ceil(ACCELERATION * 30 * lvl * Math.pow(1.1, lvl)),
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeEnergyConsumeValueFn: (lvl: number): number =>
      Math.ceil(10 * lvl * Math.pow(1.1, lvl)),
    upgradeDeuteriumConsumeValueFn: (): number => 0,
    upgradeStorageCapacityFn: (): ResourceCapacity => {
      return {
        crystal: 0,
        metal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
  },
];