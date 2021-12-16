export const gameConfigurationMap: Map<string, string> = new Map([['1', '1']]);

export enum BuildingType {
  CRYSTAL_MINE = 'CRYSTAL_MINE',
  DEUTERIUM_SYNTHESIZER = 'DEUTERIUM_SYNTHESIZER',
  METAL_MINE = 'METAL_MINE',
}

export interface BaseCost {
  metal: number;
  crystal: number;
  deuterium: number;
  energy: number;
}

export interface ResourceProduction {
  metal: number;
  crystal: number;
  deuterium: number;
  energy: number;
}

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
}

export interface ResourceBuildingConfiguration
  extends BuildingRuleConfiguration {
  upgradeMiningValueFn: (
    currentLevel: number,
    averagePlanetTemperature?: number
  ) => ResourceProduction;
}
