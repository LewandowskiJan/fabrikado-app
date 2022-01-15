import { HexagonResult } from '../services/map-generator';
import { Hexagon } from './hexagon';
import { HexagonMapCoordinate } from './hexagon-map-coordinate';
import { SolarSystem } from './solar-system';

export class Galactic {
  id: string;
  universeId: string;
  coordinates: HexagonMapCoordinate;
  solarSystems: SolarSystem[] = [];
  solarSystemsMap: Map<string, SolarSystem> = new Map();

  hexagons: Hexagon[];
  hexagonMap: Map<string, Hexagon>;
  hexagonsData: any[];

  constructor(id: string, universeId: string) {
    this.id = id;
    this.universeId = universeId;
  }

  public addSolarSystem(solarSystem: SolarSystem): void {
    this.solarSystems.push(solarSystem);
    this.solarSystemsMap.set(solarSystem.id, solarSystem);
  }

  public setupMap(hexagonResult: HexagonResult): void {
    this.hexagons = hexagonResult.hexagons;
    this.hexagonMap = hexagonResult.hexagonMap;
    this.hexagonsData = hexagonResult.hexagonsData;
  }
}