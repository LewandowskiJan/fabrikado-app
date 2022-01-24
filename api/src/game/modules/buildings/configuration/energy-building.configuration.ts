import { ACCELERATION } from './../../../configuration/globals-variables';
import {
  Cost,
  ResourceBuildingConfiguration,
  ResourceCapacity,
  ResourceProduction,
} from './../../../game-configuration.map';
import { BuildingType } from './buildingType';

export const fusionReactorConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.FUSION_REACTOR,
  {
    baseCost: {
      metal: 900,
      crystal: 360,
      energy: 0,
      deuterium: 180,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(900 * Math.pow(1.8, lvl - 1)),
        crystal: Math.ceil(360 * Math.pow(1.8, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(180 * Math.pow(1.8, lvl - 1)),
      };
    },
    upgradeMiningValueFn: (lvl: number): ResourceProduction => {
      return {
        crystal: 0,
        metal: 0,
        energy: Math.ceil(ACCELERATION * 30 * lvl * Math.pow(1.1, lvl)),
        deuterium: 0,
      };
    },
    upgradeDeuteriumConsumeValueFn: (lvl: number): number =>
      Math.ceil(ACCELERATION * 10 * lvl * Math.pow(1.1, lvl)),
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

export const solarPlantConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.SOLAR_PLANT,
  {
    baseCost: {
      metal: 75,
      crystal: 30,
      energy: 0,
      deuterium: 0,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(75 * Math.pow(1.5, lvl - 1)),
        crystal: Math.ceil(30 * Math.pow(1.5, lvl - 1)),
        energy: 0,
        deuterium: 0,
      };
    },
    upgradeMiningValueFn: (lvl: number): ResourceProduction => {
      return {
        crystal: 0,
        metal: 0,
        energy: Math.ceil(ACCELERATION * 20 * lvl * Math.pow(1.1, lvl)),
        deuterium: 0,
      };
    },
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

export const solarSatelliteConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.SOLAR_SATELLITE,
  {
    baseCost: {
      metal: 0,
      crystal: 2000,
      energy: 0,
      deuterium: 500,
    },
    requirements: new Map(),
    upgradeCostFn: (): Cost => {
      return {
        metal: 0,
        crystal: 2000,
        energy: 0,
        deuterium: 500,
      };
    },
    upgradeMiningValueFn: (
      lvl: number,
      averagePlanetTemperature?: number
    ): ResourceProduction => {
      return {
        crystal: 0,
        metal: 0,
        energy: Math.ceil((lvl * (averagePlanetTemperature + 160)) / 6),
        deuterium: 0,
      };
    },
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