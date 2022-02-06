import { HexagonCoordinates } from '../coordinates/hexagon-coordinates';
import { HexagonData } from './hexagon-data';

export interface GameMapData {
  name: string;
  attributes: HexagonCoordinates;
  orbit: number;
  elementsInside: any[];
  scopeHexagon: HexagonData[];
  isGalactic: boolean;
  isUniverse: boolean;
  galactic?: string;
  solarSystem?: string;
  universe?: string;
}
