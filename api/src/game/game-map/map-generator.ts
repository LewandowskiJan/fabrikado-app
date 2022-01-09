import { Hexagon } from './model/hexagon';

export class MapGenerator {
  public static hexagonsOnScope: number | undefined;

  public static generate(levels: number): {
    hexagons: Hexagon[];
    hexagonMap: Map<string, Hexagon>;
    hexagonsData: any[];
  } {
    const hexagonMap: Map<string, Hexagon> = new Map([]);
    const hexagons: Hexagon[] = [];

    const lowest: number = 1 - levels;

    for (let levelIndex: number = lowest; levelIndex < levels; levelIndex++) {
      if (levelIndex <= 0) {
        for (
          let hexagonIndex: number = levels - 1;
          hexagonIndex > Math.abs(levelIndex) - levels;
          hexagonIndex--
        ) {
          const hexagonName: string = `q${levelIndex}r${hexagonIndex}s${
            -hexagonIndex - levelIndex
          }`;
          const hexagon: Hexagon = new Hexagon(
            {
              q: levelIndex,
              r: hexagonIndex,
              s: -hexagonIndex - levelIndex,
            },
            hexagonName
          );
          hexagons.push(hexagon);
          hexagonMap.set(hexagonName, hexagon);
        }
      } else {
        for (
          let hexagonIndex: number = levels - 1 - Math.abs(levelIndex);
          hexagonIndex > -levels;
          hexagonIndex--
        ) {
          const hexagonName: string = `q${levelIndex}r${hexagonIndex}s${
            -hexagonIndex - levelIndex
          }`;
          const hexagon: Hexagon = new Hexagon(
            {
              q: levelIndex,
              r: hexagonIndex,
              s: -hexagonIndex - levelIndex,
            },
            hexagonName
          );
          hexagons.push(hexagon);
          hexagonMap.set(hexagonName, hexagon);
        }
      }
    }

    // console.log(hexagonMap);
    // console.log(hexagons);

    this.generateScope(hexagons, 2);
    this.setupPlanets(hexagons);
const hexagonsData: any[] = hexagons.map((h: Hexagon) => h.getData())

    // console.log(hexagons.filter((h: Hexagon) => h.elementsInside.length));
    return {
      hexagonMap,
      hexagons,
      hexagonsData,
    };
  }

  private static setupPlanets(hexagons: Hexagon[]): void {
    hexagons.forEach((hexagon: Hexagon) => {
      if (hexagon.orbit === 0) return;
      const canAddPlanet: boolean = !hexagon.scopeHexagon.some(
        (scopeHexagon: Hexagon) => {
          return scopeHexagon.elementsInside.length !== 0;
        }
      );

      if (canAddPlanet && Math.random() > 0.5) {
        hexagon.elementsInside.push(123);
      }
    });
  }

  private static generateScope(hexagons: Hexagon[], n: number): void {
    if (!this.hexagonsOnScope) {
      this.countHexagons(n);
    }
    hexagons.forEach(
      (setupHexagon: Hexagon, index: number, arrayOfHexagons: Hexagon[]) => {
        const scope: Hexagon[] = arrayOfHexagons.filter(
          (currentHexagon: Hexagon) =>
            this.filterOutOfScopeHexagons(setupHexagon, currentHexagon, n)
        );
        setupHexagon.scopeHexagon = scope;
      }
    );
  }

  private static filterOutOfScopeHexagons(
    setupHexagon: Hexagon,
    currentHexagon: Hexagon,
    n: number
  ): boolean {
    const qMinMax: { min: number; max: number } = this.minMax(
      setupHexagon.attributes.q,
      n
    );
    const rMinMax: { min: number; max: number } = this.minMax(
      setupHexagon.attributes.r,
      n
    );
    const sMinMax: { min: number; max: number } = this.minMax(
      setupHexagon.attributes.s,
      n
    );

    if (
      qMinMax.min <= currentHexagon.attributes.q &&
      currentHexagon.attributes.q <= qMinMax.max
    ) {
      if (
        Math.max(rMinMax.min, -currentHexagon.attributes.q - sMinMax.max) <=
          currentHexagon.attributes.r &&
        currentHexagon.attributes.r <=
          Math.min(rMinMax.max, -currentHexagon.attributes.q - sMinMax.min)
      ) {
        return true;
      }
    }

    return false;
  }

  private static minMax(a: number, b: number): { min: number; max: number } {
    return {
      min: a - b,
      max: a + b,
    };
  }

  private static countHexagons(n: number): void {
    let counter: number = 1;
    for (let i: number = 1; i < n + 1; i++) {
      counter = counter + i * 6;
    }
    this.hexagonsOnScope = counter;
  }
}
