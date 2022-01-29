import { Hexagon } from './../../../game/game-map/hexagon';

export interface HexagonResult {
  hexagons: Hexagon[];
  hexagonMap: Map<string, Hexagon>;
  hexagonsData: any[];
}
