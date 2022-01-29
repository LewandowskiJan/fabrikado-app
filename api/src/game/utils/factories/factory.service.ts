import { Planet } from './../../../game/modules/game-map/planet/planet';
import { Building } from './../../modules/buildings/building';
import { Coordinates } from './../models/coordinates';
import { BuildingType } from './../models/enums/building-type';
import { BuildingFactory } from './building-factory/building.factory';
import { PlanetFactory } from './planet-factory/planet.factory';

export class FactoryService {
  public static generatePlanet(
    coordinates: Coordinates,
    orbit: number
  ): Planet {
    return PlanetFactory.generatePlanet(coordinates, orbit);
  }

  public static generateBuilding(
    type: BuildingType,
    avgTemperature: number
  ): Building {
    return BuildingFactory.generateBuilding(type, avgTemperature);
  }
}
