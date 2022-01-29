import { Coordinates } from './../models/coordinates';
import { GameMap } from './../models/map-data/game-map';
import { UniverseGenerator } from './map/universe-generator.service';
import { PlanetNameGenerator } from './planet/planet-name.generator';
import { PlanetSizeGenerator } from './planet/planet-size.generator';
import { PlanetTypeGenerator } from './planet/planet-type.generator';

export class GeneratorService {
  public static generateGameMap(): GameMap {
    return UniverseGenerator.generateUniverse();
  }

  public static generatePlanetNameBaseOnCoordinates(
    coordinates: Coordinates
  ): string {
    return PlanetNameGenerator.generatePlanetNameBaseOnCoordinates(coordinates);
  }

  public static generatePlaneTypeBaseOnCoordinates(size: number): string {
    return PlanetTypeGenerator.generatePlaneTypeBaseSize(size);
  }

  public static generatePlanetSizeByPlanetIndex(planetIndex: number): number {
    return PlanetSizeGenerator.generatePlanetSizeByPlanetIndex(planetIndex);
  }
}
