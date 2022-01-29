import { Planet } from './../modules/game-map/planet/planet';
import { HexagonMapCoordinate } from './../utils/models/hexagon-map-coordinate';
import { HexagonResult } from './../utils/models/hexagon-result';
import { Hexagon } from './hexagon';

export class SolarSystem {
  public id: string;
  public galacticId: string;
  public universeId: string;
  public coordinates: HexagonMapCoordinate;
  public planets: Planet[] = [];
  public planetsMap: Map<string, Planet> = new Map();

  public hexagons: Hexagon[];
  public hexagonMap: Map<string, Hexagon>;
  public hexagonsData: any[];

  constructor(id: string, galacticId: string, universeId: string) {
    this.id = id;
    this.galacticId = galacticId;
    this.universeId = universeId;
  }

  public addPlanet(planet: Planet): void {
    this.planets.push(planet);
    this.planetsMap.set(planet.name, planet);
  }

  public setupMap(hexagonResult: HexagonResult): void {
    this.hexagons = hexagonResult.hexagons;
    this.hexagonMap = hexagonResult.hexagonMap;
    this.hexagonsData = hexagonResult.hexagonsData;
  }
}
