import { Coordinates } from '@game/coordinates/coordinates';
import { GameConfiguration } from '@game/game-configuration';

export class PlanetSearch {
  public static searchPlanetIndexByCoordinatesAndGameConfiguration(
    coordinates: Coordinates,
    gameConfiguration: GameConfiguration
  ): number {
    const { galacticIndex, solarSystemIndex, planetIndex }: Coordinates =
      coordinates;

    const {
      galaxyNumber,
      solarSystemNumber,
      planetsInSolarSystem,
    }: GameConfiguration = gameConfiguration;

    if (
      galacticIndex > galaxyNumber ||
      solarSystemIndex > solarSystemNumber ||
      planetIndex > planetsInSolarSystem
    ) {
      return -1;
    }

    const galactic: number =
      (galacticIndex - 1) * solarSystemNumber * planetsInSolarSystem;

    const solarSystem: number = (solarSystemIndex - 1) * planetsInSolarSystem;

    const planet: number = planetIndex - 1;
    return galactic + solarSystem + planet;
  }
}
