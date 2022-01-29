import { HexagonMapCoordinate } from './../utils/models/hexagon-map-coordinate';
import { HexagonResult } from './../utils/models/hexagon-result';
import { Galactic } from './galactic';
import { Hexagon } from './hexagon';

export class Universe {
  id: string;
  coordinates: HexagonMapCoordinate;
  galaxies: Galactic[] = [];
  galaxiesMap: Map<string, Galactic> = new Map();

  hexagons: Hexagon[];
  hexagonMap: Map<string, Hexagon>;
  hexagonsData: any[];

  constructor(id: string) {
    this.id = id;
  }

  public addGalactic(galactic: Galactic): void {
    this.galaxies.push(galactic);
    this.galaxiesMap.set(galactic.id, galactic);
  }

  public setupMap(hexagonResult: HexagonResult): void {
    this.hexagons = hexagonResult.hexagons;
    this.hexagonMap = hexagonResult.hexagonMap;
    this.hexagonsData = hexagonResult.hexagonsData;
  }
}
