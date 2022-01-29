import { HexagonMapCoordinate } from './../utils/models/hexagon-map-coordinate';
import { HexagonResult } from './../utils/models/hexagon-result';
import { Hexagon } from './hexagon';
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

  public addSolarSystem(
    solarSystem: SolarSystem,
    solarSystemIndex: number
  ): void {
    this.solarSystems.push(solarSystem);
    this.solarSystemsMap.set(solarSystem.id, solarSystem);

    const hexagon: Hexagon = this.hexagons[solarSystemIndex - 1];
    hexagon.solarSystem = solarSystem.id;
    this.hexagonsData = this.hexagons.map((h: Hexagon) => h.getData());
  }

  public setupMap(hexagonResult: HexagonResult): void {
    this.hexagons = hexagonResult.hexagons;
    this.hexagonMap = hexagonResult.hexagonMap;
    this.hexagonsData = hexagonResult.hexagonsData;
  }
}
