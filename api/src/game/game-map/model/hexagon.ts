import { MapGeneratorOptions } from '../services/map-generator';
import { HexagonMapCoordinate } from './hexagon-map-coordinate';

export class Hexagon {
  public name: string;
  public attributes: HexagonMapCoordinate;
  public orbit: number;
  public elementsInside: any[] = [];
  public scopeHexagon: Hexagon[] = [];

  public universe: string;
  public galactic: string | undefined;
  public solarSystem: string | undefined;
  public isGalactic: boolean = false;
  public isUniverse: boolean = false;

  constructor(
    attributes: HexagonMapCoordinate,
    name: string,
    options: MapGeneratorOptions,
    isGalactic: boolean,
    isUniverse: boolean
  ) {
    this.name = name;
    this.universe = options.universe;
    this.galactic = options.galactic;
    this.solarSystem = options.solarSystem;

    this.isGalactic = isGalactic;
    this.isUniverse = isUniverse;

    this.attributes = attributes;
    this.calculateOrbit();
  }
  private calculateOrbit(): void {
    this.orbit =
      (Math.abs(this.attributes.q) +
        Math.abs(this.attributes.r) +
        Math.abs(this.attributes.s)) /
      2;
  }

  public getData(): any {
    return {
      name: this.name,
      attributes: {
        q: this.attributes.q,
        r: this.attributes.r,
        s: this.attributes.s,
      },
      universe: this.universe,
      galactic: this.galactic,
      solarSystem: this.solarSystem,
      isGalactic: this.isGalactic,
      isUniverse: this.isUniverse,
      orbit: this.orbit,
      elementsInside: this.elementsInside,
      scopeHexagon: this.scopeHexagon.map((h: Hexagon) => {
        return {
          name: h.name,
          q: h.attributes.q,
          r: h.attributes.r,
          s: h.attributes.s,
        };
      }),
    };
  }
}
