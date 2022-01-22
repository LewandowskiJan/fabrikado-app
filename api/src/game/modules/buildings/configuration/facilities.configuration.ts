import {
  Cost,
  ResourceBuildingConfiguration,
} from './../../../game-configuration.map';
import { BuildingType } from './buildingType';

export const roboticsFactoryConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.ROBOTICS_FACTORY,
  {
    baseCost: {
      metal: 400,
      crystal: 120,
      energy: 0,
      deuterium: 200,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(400 * Math.pow(2, lvl)),
        crystal: Math.ceil(120 * Math.pow(2, lvl)),
        energy: 0,
        deuterium: Math.ceil(200 * Math.pow(2, lvl)),
      };
    },
    upgradeRoboticTimeReduceFn: (lvl: number): number => 1 / (lvl + 1),
  },
];

export const shipyardConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.SHIPYARD,
  {
    baseCost: {
      metal: 400,
      crystal: 200,
      energy: 0,
      deuterium: 100,
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.ROBOTICS_FACTORY, 2],
    ]),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(400 * Math.pow(2, lvl)),
        crystal: Math.ceil(200 * Math.pow(2, lvl)),
        energy: 0,
        deuterium: Math.ceil(100 * Math.pow(2, lvl)),
      };
    },
    upgradeShipAndDefenceTimeReduceFn: (
      metalCost: number,
      crystalCost: number,
      lvl: number,
      naniteFactoryLevel: number
    ): number => {
      return Math.ceil(
        (metalCost + crystalCost) /
          (2_500 * (1 + lvl) * Math.pow(2, naniteFactoryLevel))
      );
    },
  },
];

export const researchLabConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.RESEARCH_LAB,
  {
    baseCost: {
      metal: 200,
      crystal: 400,
      energy: 0,
      deuterium: 200,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(200 * Math.pow(2, lvl)),
        crystal: Math.ceil(400 * Math.pow(2, lvl)),
        energy: 0,
        deuterium: Math.ceil(200 * Math.pow(2, lvl)),
      };
    },
  },
];

export const allianceDepotConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.ALLIANCE_DEPOT,
  {
    baseCost: {
      metal: 20_000,
      crystal: 40_000,
      energy: 0,
      deuterium: 0,
    },
    requirements: new Map(),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(20_000 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(40_000 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: 0,
      };
    },
  },
];

export const missileSiloConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.MISSILE_SILO,
  {
    baseCost: {
      metal: 20_000,
      crystal: 20_000,
      energy: 0,
      deuterium: 1_000,
    },
    requirements: new Map<BuildingType, number>([[BuildingType.SHIPYARD, 1]]),
    upgradeCostFn: (lvl: number): Cost => {
      const multiplier: number =
        Math.pow(2, lvl - 1) * 2 - 1 === 0 ? 1 : Math.pow(2, lvl - 1) * 2 - 1;
      return {
        metal: Math.ceil(20_000 * multiplier),
        crystal: Math.ceil(20_000 * multiplier),
        energy: 0,
        deuterium: Math.ceil(1_000 * multiplier),
      };
    },
    upgradeMissileSlots: (lvl: number): number => lvl * 10,
  },
];

export const naniteFactoryConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.NANITE_FACTORY,
  {
    baseCost: {
      metal: 1_000_000,
      crystal: 500_000,
      energy: 0,
      deuterium: 100_000,
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.ROBOTICS_FACTORY, 10],
      [BuildingType.COMPUTER_TECHNOLOGY, 10],
    ]),
    upgradeCostFn: (lvl: number): Cost => {
      const multiplier: number =
        Math.pow(2, lvl) - 1 === 0 ? 1 : Math.pow(2, lvl) - 1;

      return {
        metal: Math.ceil(1_000_000 * multiplier),
        crystal: Math.ceil(500_000 * multiplier),
        energy: 0,
        deuterium: Math.ceil(100_000 * multiplier),
      };
    },
  },
];

export const terraFormerConfiguration: [
  BuildingType,
  ResourceBuildingConfiguration
] = [
  BuildingType.TERRAFORMER,
  {
    baseCost: {
      metal: 0,
      crystal: 50_000,
      energy: 1_000,
      deuterium: 100_000,
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.NANITE_FACTORY, 1],
      [BuildingType.ENERGY_TECHNOLOGY, 12],
    ]),
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(1_000_000 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(500_000 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(100_000 * Math.pow(2, lvl - 1)),
      };
    },
    updateExtraFields: (lvl: number): number => Math.floor(lvl * 5 + lvl / 2),
  },
];
