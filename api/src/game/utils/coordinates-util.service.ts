import { Coordinates } from '../model/coordinates/coordinates';

export class CoordinatesUtilService {
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
