import { Requirements } from './../../requirements';
import { BaseCost, ResourceCapacity } from './cost.type';

export interface BuildingRuleConfiguration {
  baseCost: BaseCost;
  requirements: Requirements;
  upgradeCostFn: (currentLevel: number) => BaseCost;
  upgradeEnergyConsumeValueFn?: (currentLevel: number) => number;
  upgradeDeuteriumConsumeValueFn?: (currentLevel: number) => number;
  upgradeStorageCapacityFn?: (currentLevel: number) => ResourceCapacity;
  upgradeRoboticTimeReduceFn?: (currentLevel: number) => number;
  upgradeMissileSlots?: (currentLevel: number) => number;
  updateExtraFields?: (currentLevel: number) => number;
  upgradeShipAndDefenceTimeReduceFn?: (
    metalCost: number,
    crystalCost: number,
    lvl: number,
    naniteFactoryLevel: number
  ) => number;
}
