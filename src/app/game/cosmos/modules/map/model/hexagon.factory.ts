import { ElementRef } from '@angular/core';

import { Hexagon } from './hexagon';

export class HexagonFactory {
  public countHexagons(): number {
    return 0;
  }

  public static createAxialCoordinateSystem(
    levels: number,
    canvas: ElementRef<HTMLCanvasElement>,
    context: CanvasRenderingContext2D
  ): Hexagon[] {
    const hexagons: Hexagon[] = [];
    const lowest: number = 1 - levels;

    for (let levelIndex: number = lowest; levelIndex < levels; levelIndex++) {
      if (levelIndex <= 0) {
        for (
          let hexagonIndex: number = levels - 1;
          hexagonIndex > Math.abs(levelIndex) - levels;
          hexagonIndex--
        ) {
          hexagons.push(
            new Hexagon(canvas, context, {
              q: levelIndex,
              r: hexagonIndex,
              s: -hexagonIndex - levelIndex,
            })
          );
        }
      } else {
        for (
          let hexagonIndex: number = levels - 1 - Math.abs(levelIndex);
          hexagonIndex > -levels;
          hexagonIndex--
        ) {
          hexagons.push(
            new Hexagon(canvas, context, {
              q: levelIndex,
              r: hexagonIndex,
              s: -hexagonIndex - levelIndex,
            })
          );
        }
      }
    }
    return hexagons;
  }
}
