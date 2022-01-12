export interface Coordinates {
  galacticIndex: number;
  solarSystemIndex: number;
  planetIndex?: number,
  hexagon?: {
    q: number,
    r: number,
    s: number,
  };
}
