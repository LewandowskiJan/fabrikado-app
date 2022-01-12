import { Hexagon } from '../model/hexagon';

export class HexagonGeneratorService {
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

    const hexagonsData: any[] = hexagons.map((h: Hexagon) => h.getData());

    return {
      hexagonMap,
      hexagons,
      hexagonsData,
    };
  }
}
