import { ACCELERATION } from './configuration/globals-variables';
import {
  BaseCost,
  BuildingType,
  GameRuleConfiguration,
  ResourceProduction,
} from './game-configuration.map';
import {
  GameConfig,
  ResourceBuildingConfiguration,
} from './game-configuration.map';

export const buildingConfigurationMap: Map<
  BuildingType,
  ResourceBuildingConfiguration
> = new Map([
  [
    BuildingType.CRYSTAL_MINE,
    {
      baseCost: {
        metal: 48,
        crystal: 24,
        energy: 0,
        deuterium: 0,
      },
      upgradeCostFn: (lvl: number): BaseCost => {
        return {
          metal: Math.floor(48 * Math.pow(1.6, lvl - 1)),
          crystal: Math.floor(24 * Math.pow(1.6, lvl - 1)),
          energy: 0,
          deuterium: 0,
        };
      },
      upgradeMiningValueFn: (lvl: number): ResourceProduction => {
        return {
          crystal: Math.floor(ACCELERATION * 20 * lvl * Math.pow(1.1, lvl)),
          metal: 0,
          energy: 0,
          deuterium: 0,
        };
      },
      upgradeEnergyConsumeValueFn: (lvl: number): number =>
        Math.floor(10 * lvl * Math.pow(1.1, lvl)),
    },
  ],
  [
    BuildingType.DEUTERIUM_SYNTHESIZER,
    {
      baseCost: {
        metal: 225,
        crystal: 75,
        energy: 0,
        deuterium: 0,
      },
      upgradeCostFn: (lvl: number): BaseCost => {
        return {
          metal: Math.floor(225 * Math.pow(1.5, lvl - 1)),
          crystal: Math.floor(75 * Math.pow(1.5, lvl - 1)),
          energy: 0,
          deuterium: 0,
        };
      },
      upgradeMiningValueFn: (
        lvl: number,
        averagePlanetTemperature: number
      ): ResourceProduction => {
        return {
          crystal: 0,
          metal: 0,
          energy: 0,
          deuterium: Math.floor(
            ACCELERATION *
              (10 * lvl * Math.pow(1.5, lvl - 1)) *
              (1.36 - 0.004 * averagePlanetTemperature)
          ),
        };
      },
      upgradeEnergyConsumeValueFn: (lvl: number): number =>
        Math.floor(10 * lvl * Math.pow(1.1, lvl)),
    },
  ],
  [
    BuildingType.METAL_MINE,
    {
      baseCost: {
        metal: 60,
        crystal: 15,
        energy: 0,
        deuterium: 0,
      },
      upgradeCostFn: (lvl: number): BaseCost => {
        return {
          metal: Math.floor(60 * Math.pow(1.5, lvl - 1)),
          crystal: Math.floor(15 * Math.pow(1.5, lvl - 1)),
          energy: 0,
          deuterium: 0,
        };
      },
      upgradeMiningValueFn: (lvl: number): ResourceProduction => {
        return {
          crystal: 0,
          metal: Math.floor(ACCELERATION * 30 * lvl * Math.pow(1.1, lvl)),
          energy: 0,
          deuterium: 0,
        };
      },
      upgradeEnergyConsumeValueFn: (lvl: number): number =>
        Math.floor(10 * lvl * Math.pow(1.1, lvl)),
    },
  ],
]);

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
  public galaxyNumber: number = 5;
  public solarSystemNumber: number = 50;
  public planetsInSolarSystem: number = 5;
  public playerNumber: number = 100;
  public gameRuleConfiguration: GameRuleConfiguration = gameRuleConfig;
}
