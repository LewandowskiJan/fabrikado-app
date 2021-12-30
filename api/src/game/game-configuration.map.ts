import { BuildingType } from './building/configuration/buildingType';

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
  upgradeCostFn: (currentLevel: number) => BaseCost;
  upgradeEnergyConsumeValueFn: (currentLevel: number) => number;
  upgradeDeuteriumConsumeValueFn: (currentLevel: number) => number;
  upgradeStorageCapacityFn: (currentLevel: number) => ResourceCapacity;
}

export interface ResourceBuildingConfiguration
  extends BuildingRuleConfiguration {
  upgradeMiningValueFn: (
    currentLevel: number,
    averagePlanetTemperature?: number
  ) => ResourceProduction;
}
