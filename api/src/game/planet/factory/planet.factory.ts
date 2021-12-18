import { Building } from '../../building/building';
import { Planet } from '../planet';
import { PlanetNameGenerator } from '../util/planet-name.generator';
import { PlanetSizeGenerator } from '../util/planet-size.generator';
import { BuildingFactory } from './../../building/building.factory';
import { BuildingType } from './../../building/configuration/buildingType';
import { Coordinates } from './../../coordinates/coordinates';
import {
  PlanetConfiguration,
  planetConfigurationByPlanetIndexMap,
} from './planet.configuration';

export interface Temperatures {
  averageTemperature: number;
  maxTemperature: number;
  minTemperature: number;
}

export interface PlanetData {
  playerId: string;
  name: string;
  coordinates: Coordinates;
  size: number;
  satStrength: number;
  requireSat: number;
  crystal: number;
  deuterium: number;
  deuteriumEfficiency: number;
  averageTemperature: number;
  maxTemperature: number;
  minTemperature: number;
  buildings: Building[];
}

export class PlanetFactory {
  public static planetConfiguration: Map<number, PlanetConfiguration> =
    planetConfigurationByPlanetIndexMap;

  private static buildingType: typeof BuildingType = BuildingType;

  public static generatePlanet(coordinates: Coordinates): Planet {
    const temperatures: Temperatures =
      PlanetFactory.calculateTemperatureBaseOnPlanetIndex(
        coordinates.planetIndex
      );

    // todo: test only
    let playerId: string;
    if (
      coordinates.galacticIndex === 1 &&
      coordinates.solarSystemIndex === 1 &&
      coordinates.planetIndex === 1
    ) {
      playerId = '1';
    }

    if (
      coordinates.galacticIndex === 1 &&
      coordinates.solarSystemIndex === 1 &&
      coordinates.planetIndex === 2
    ) {
      playerId = '1';
    }
    // remove under

    const planetInitialData: PlanetData = {
      playerId,
      coordinates,
      name: PlanetNameGenerator.generatePlanetNameBaseOnCoordinates(
        coordinates
      ),
      satStrength: PlanetFactory.planetConfiguration.get(
        coordinates.planetIndex
      ).satStrength,
      requireSat: PlanetFactory.planetConfiguration.get(coordinates.planetIndex)
        .requireSat,
      crystal: PlanetFactory.planetConfiguration.get(coordinates.planetIndex)
        .crystal,
      deuterium: PlanetFactory.planetConfiguration.get(coordinates.planetIndex)
        .deuterium,
      deuteriumEfficiency: PlanetFactory.planetConfiguration.get(
        coordinates.planetIndex
      ).deuteriumEfficiency,
      ...temperatures,
      buildings: PlanetFactory.setupBuildings(temperatures.averageTemperature),
      size: PlanetSizeGenerator.generatePlanetSizeByPlanetIndex(
        coordinates.planetIndex
      ),
    };

    return new Planet(planetInitialData);
  }

  private static calculateTemperatureBaseOnPlanetIndex(
    planetIndex: number
  ): Temperatures {
    const max: number =
      PlanetFactory.planetConfiguration.get(planetIndex).maxTemperature;
    const min: number = max - 60;
    const maxTemperature: number = Math.floor(60 * Math.random() + min);
    const minTemperature: number =
      Math.floor((maxTemperature - min) * Math.random()) + min;

    return {
      averageTemperature: PlanetFactory.calculateAverageTemperature(
        maxTemperature,
        minTemperature
      ),
      maxTemperature,
      minTemperature,
    };
  }

  private static calculateAverageTemperature(
    maxTemperature: number,
    minTemperature: number
  ): number {
    return Math.floor((maxTemperature + minTemperature) / 2);
  }

  private static setupBuildings(averageTemperature: number): Building[] {
    const buildings: Building[] = [];

    [
      PlanetFactory.buildingType.CRYSTAL_MINE,
      PlanetFactory.buildingType.DEUTERIUM_SYNTHESIZER,
      PlanetFactory.buildingType.METAL_MINE,
    ].forEach((type: BuildingType) =>
      buildings.push(BuildingFactory.generateBuilding(type, averageTemperature))
    );

    return buildings;
  }
}
