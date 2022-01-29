import { HexagonMapCoordinate } from './hexagon-map-coordinate';

export interface Coordinates {
  galacticIndex: number;
  solarSystemIndex: number;
  planetIndex?: number;
  hexagon?: HexagonMapCoordinate;
}
