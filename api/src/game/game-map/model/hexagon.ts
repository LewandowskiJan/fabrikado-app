import { HexagonMapCoordinate } from './hexagon-map-coordinate';

export class Hexagon {
  public name: string;
  public attributes: HexagonMapCoordinate;
  public orbit: number;
  public elementsInside: any[] = [];
  public scopeHexagon: Hexagon[] = [];

  constructor(attributes: HexagonMapCoordinate, name: string) {
    this.name = name;
    this.attributes = attributes;
    this.calculateOrbit();
    if (
      this.attributes.s === 0 &&
      this.attributes.r === 0 &&
      this.attributes.q === 0
    ) {
      this.addPlanetToHexagon();
    }
  }

  private addPlanetToHexagon(): void {
    const planet: any = { planet: 12 };
    this.elementsInside.push(planet);
  }

  private calculateOrbit(): void {
    this.orbit =
      (Math.abs(this.attributes.q) +
        Math.abs(this.attributes.r) +
        Math.abs(this.attributes.s)) /
      2;
  }

  public getData(): any {
    // console.log(this.elementsInside);
    this.getElementInsideData();
    return {
      name: this.name,
      attributes: {
        q: this.attributes.q,
        r: this.attributes.r,
        s: this.attributes.s,
      },
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

  public getElementInsideData(): void {
    this.elementsInside.map((el: any) => console.log(el));
  }
}
