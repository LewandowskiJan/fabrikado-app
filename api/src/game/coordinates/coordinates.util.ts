import { Coordinates } from './coordinates';

export class CoordinatesUtil {
  public static compare(
    coordinates1: Coordinates,
    coordinates2: Coordinates
  ): boolean {
    return (
      coordinates1.galacticIndex === coordinates2.galacticIndex &&
      coordinates1.solarSystemIndex === coordinates2.solarSystemIndex &&
      coordinates1.planetIndex === coordinates2.planetIndex
    );
  }
}
