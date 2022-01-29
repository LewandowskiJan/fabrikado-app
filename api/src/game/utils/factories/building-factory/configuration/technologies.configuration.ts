import { ResourceBuildingRuleConfiguration } from './../../../models/config-types/rule/resource-building-rule-configuration';
import { Cost } from './../../../models/cost';
import { BuildingType } from './../../../models/enums/building-type';

export const espionageTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.ESPIONAGE_TECHNOLOGY,
  {
    baseCost: {
      metal: 200,
      crystal: 1_000,
      energy: 0,
      deuterium: 200,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(200 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(1_000 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(200 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 3],
    ]),
  },
];

export const computerTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.COMPUTER_TECHNOLOGY,
  {
    baseCost: {
      metal: 0,
      crystal: 400,
      energy: 0,
      deuterium: 600,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: 0,
        crystal: Math.ceil(400 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(600 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 1],
    ]),
  },
];

export const weaponTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.WEAPON_TECHNOLOGY,
  {
    baseCost: {
      metal: 800,
      crystal: 200,
      energy: 0,
      deuterium: 0,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(800 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(200 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: 0,
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 4],
    ]),
  },
];

export const shieldingTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.SHIELDING_TECHNOLOGY,
  {
    baseCost: {
      metal: 200,
      crystal: 600,
      energy: 0,
      deuterium: 0,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(200 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(600 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: 0,
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 6],
      [BuildingType.ENERGY_TECHNOLOGY, 3],
    ]),
  },
];

export const armourTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.ARMOUR_TECHNOLOGY,
  {
    baseCost: {
      metal: 1_000,
      crystal: 0,
      energy: 0,
      deuterium: 0,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(1_000 * Math.pow(2, lvl - 1)),
        crystal: 0,
        energy: 0,
        deuterium: 0,
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 2],
    ]),
  },
];

export const energyTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.ENERGY_TECHNOLOGY,
  {
    baseCost: {
      metal: 0,
      crystal: 800,
      energy: 0,
      deuterium: 400,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(800 * Math.pow(2, lvl - 1)),
        crystal: 0,
        energy: 0,
        deuterium: Math.ceil(400 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 2],
    ]),
  },
];

export const hyperspaceTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.HYPERSPACE_TECHNOLOGY,
  {
    baseCost: {
      metal: 0,
      crystal: 4_000,
      energy: 0,
      deuterium: 2_000,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: 0,
        crystal: Math.ceil(4_000 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(2_000 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 7],
      [BuildingType.ENERGY_TECHNOLOGY, 5],
      [BuildingType.SHIELDING_TECHNOLOGY, 5],
    ]),
  },
];

export const combustionDriveConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.COMBUSTION_DRIVE,
  {
    baseCost: {
      metal: 400,
      crystal: 0,
      energy: 0,
      deuterium: 600,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(400 * Math.pow(2, lvl - 1)),
        crystal: 0,
        energy: 0,
        deuterium: Math.ceil(600 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 1],
      [BuildingType.ENERGY_TECHNOLOGY, 1],
    ]),
  },
];

export const impulseDriveConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.IMPULSE_DRIVE,
  {
    baseCost: {
      metal: 2_000,
      crystal: 4_000,
      energy: 0,
      deuterium: 600,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(2_000 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(4_000 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(600 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 2],
      [BuildingType.ENERGY_TECHNOLOGY, 1],
    ]),
  },
];

export const hyperspaceDriveConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.HYPERSPACE_DRIVE,
  {
    baseCost: {
      metal: 10_000,
      crystal: 20_000,
      energy: 0,
      deuterium: 6_000,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(10_000 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(20_000 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(6_000 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 7],
      [BuildingType.HYPERSPACE_TECHNOLOGY, 3],
    ]),
  },
];

export const laserTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.LASER_TECHNOLOGY,
  {
    baseCost: {
      metal: 200,
      crystal: 100,
      energy: 0,
      deuterium: 0,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(200 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(100 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: 0,
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 1],
      [BuildingType.ENERGY_TECHNOLOGY, 2],
    ]),
  },
];

export const ionTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.ION_TECHNOLOGY,
  {
    baseCost: {
      metal: 1_000,
      crystal: 300,
      energy: 0,
      deuterium: 100,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(1_000 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(300 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(100 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 4],
      [BuildingType.ENERGY_TECHNOLOGY, 4],
      [BuildingType.LASER_TECHNOLOGY, 5],
    ]),
  },
];

export const plasmaTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.PLASMA_TECHNOLOGY,
  {
    baseCost: {
      metal: 2_000,
      crystal: 4_000,
      energy: 0,
      deuterium: 1_000,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(2_000 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(4_000 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(1_000 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 4],
      [BuildingType.ENERGY_TECHNOLOGY, 8],
      [BuildingType.LASER_TECHNOLOGY, 10],
      [BuildingType.ION_TECHNOLOGY, 5],
    ]),
  },
];

export const intergalacticResearchNetworkConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.INTERGALACTIC_RESEARCH_NETWORK,
  {
    baseCost: {
      metal: 240_000,
      crystal: 400_000,
      energy: 0,
      deuterium: 160_000,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(240_000 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(400_000 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(160_000 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 10],
      [BuildingType.COMPUTER_TECHNOLOGY, 8],
      [BuildingType.HYPERSPACE_TECHNOLOGY, 8],
    ]),
  },
];

export const astrophysicsConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.ASTROPHYSICS,
  {
    baseCost: {
      metal: 4_000,
      crystal: 8_000,
      energy: 0,
      deuterium: 4_000,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: Math.ceil(4_000 * Math.pow(2, lvl - 1)),
        crystal: Math.ceil(8_000 * Math.pow(2, lvl - 1)),
        energy: 0,
        deuterium: Math.ceil(4_000 * Math.pow(2, lvl - 1)),
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 3],
      [BuildingType.IMPULSE_DRIVE, 3],
      [BuildingType.ESPIONAGE_TECHNOLOGY, 4],
    ]),
  },
];

export const gravitonTechnologyConfiguration: [
  BuildingType,
  ResourceBuildingRuleConfiguration
] = [
  BuildingType.GRAVITON_TECHNOLOGY,
  {
    baseCost: {
      metal: 0,
      crystal: 0,
      energy: 300_000,
      deuterium: 0,
    },
    upgradeCostFn: (lvl: number): Cost => {
      return {
        metal: 0,
        crystal: 0,
        energy: Math.ceil(300_000 * Math.pow(2, lvl - 1)),
        deuterium: 0,
      };
    },
    requirements: new Map<BuildingType, number>([
      [BuildingType.RESEARCH_LAB, 3],
      [BuildingType.IMPULSE_DRIVE, 3],
      [BuildingType.ESPIONAGE_TECHNOLOGY, 4],
    ]),
  },
];
