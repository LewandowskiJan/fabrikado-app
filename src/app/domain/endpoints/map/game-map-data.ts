export interface HexagonMapCoordinate {
  q: number;
  r: number;
  s: number;
}

export interface HexagonData {
  name: string;
  attributes: HexagonMapCoordinate;
  orbit: number;
  elementsInside: any[];
  scopeHexagon: HexagonData[];
}

export interface GameMapData {
  name: string;
  attributes: HexagonMapCoordinate;
  orbit: number;
  elementsInside: any[];
  scopeHexagon: HexagonData[];
  isGalactic: boolean;
  isUniverse: boolean;
  galactic?: string;
  solarSystem?: string;
  universe?: string;
}
