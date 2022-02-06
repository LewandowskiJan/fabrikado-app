import { HexagonCoordinates } from '../coordinates/hexagon-coordinates';

export interface HexagonData {
  name: string;
  attributes: HexagonCoordinates;
  orbit: number;
  elementsInside: any[];
  scopeHexagon: HexagonData[];
}
