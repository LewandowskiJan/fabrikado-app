import { Requirements } from './model/requirements/requirements';
import { BuildingType } from './modules/buildings/configuration/buildingType';

export const gameConfigurationMap: Map<string, string> = new Map([['1', '1']]);

export interface Cost {
  metal: number;
  crystal: number;
  deuterium: number;
  energy: number;
}

export type BaseCost = Cost;
export type ResourceProduction = Cost;
export type ResourceCapacity = Cost;

export interface GameConfig {
  galaxyNumber: number;
  solarSystemNumber: number;
  planetsInSolarSystem: number;
  playerNumber: number;
  gameRuleConfiguration: GameRuleConfiguration;
}

export interface GameRuleConfiguration {
  planetRuleConfiguration: PlanetRuleConfiguration;
  // galaxyRuleConfiguration: GalaxyRuleConfiguration;
  // universeRuleConfiguration: UniverseRuleConfiguration;
  buildingConfiguration: Map<BuildingType, ResourceBuildingConfiguration>;
}

// export interface UniverseRuleConfiguration {
//   setUniverseNumber: (universeNumber: number) => void;
// }

// export interface GalaxyRuleConfiguration {
//   setGalaxyNumber: (galaxyNumber: number) => void;
// }

export interface PlanetRuleConfiguration {
  generatePlanetSizeFn: (planetPositionInSolarSystem: number) => number;
  generatePlanetTemperatureFn: (planetPositionInSolarSystem: number) => number;
}

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

export interface ResourceBuildingConfiguration
  extends BuildingRuleConfiguration {
  upgradeMiningValueFn?: (
    currentLevel: number,
    averagePlanetTemperature?: number
  ) => ResourceProduction;
}
