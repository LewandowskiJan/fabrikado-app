import { HexagonCoordinates } from './hexagon-coordinates';

export interface Coordinates {
  galacticIndex: string | undefined;
  solarSystemIndex: string | undefined;
  universeIndex?: string | undefined;
  planetIndex?: string | undefined;
  hexagonCoordinates?: HexagonCoordinates;
}
