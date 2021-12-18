import { buildingConfigurationMap } from './building/configuration/buildingConfiguration.map';
import {
  GALAXIES_NUMBER,
  PLANETS_IN_SOLAR_SYSTEM_NUMBER,
  PLAYERS_NUMBER,
  SOLAR_SYSTEMS_NUMBER,
} from './configuration/globals-variables';
import { GameRuleConfiguration } from './game-configuration.map';
import { GameConfig } from './game-configuration.map';

const gameRuleConfig: GameRuleConfiguration = {
  planetRuleConfiguration: {
    generatePlanetSizeFn: (planetPositionInSolarSystem: number): number => {
      return planetPositionInSolarSystem;
    },
    generatePlanetTemperatureFn: (
      planetPositionInSolarSystem: number
    ): number => {
      return planetPositionInSolarSystem;
    },
  },
  buildingConfiguration: buildingConfigurationMap,
};

export class GameConfiguration implements GameConfig {
  public galaxyNumber: number = GALAXIES_NUMBER;
  public solarSystemNumber: number = SOLAR_SYSTEMS_NUMBER;
  public planetsInSolarSystem: number = PLANETS_IN_SOLAR_SYSTEM_NUMBER;
  public playerNumber: number = PLAYERS_NUMBER;
  public gameRuleConfiguration: GameRuleConfiguration = gameRuleConfig;
}
