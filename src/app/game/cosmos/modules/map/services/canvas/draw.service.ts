import { Injectable } from '@angular/core';

import { HexagonCoordinates } from '@models/interfaces/game/coordinates/hexagon-coordinates';
import { SelectedHexagonIds } from '@models/interfaces/game/game-map/selected-hexagon-ids';

import { Hexagon } from '../../model/hexagon';
import { hexagonRouteDraw } from '../../model/path/hexagon-util';
import { Path } from './../../model/path/path';

@Injectable({
  providedIn: 'root',
})
export class DrawService {
  public context: CanvasRenderingContext2D | undefined;
  public hexagonMap: Map<string, Hexagon> | undefined;

  public hexagonFrameNumber: number = 1;

  public drawPath(
    selectedHexagonId: SelectedHexagonIds,
    selectedHexagons: Map<string, Hexagon>,
    context: CanvasRenderingContext2D,
    hexagonMap: Map<string, Hexagon>,
    paths: Path[]
  ): void {
    if (!this.context) this.context = context;
    if (!this.hexagonMap) {
      this.hexagonMap = hexagonMap;
      this.hexagonFrameNumber = (hexagonMap.size - 1) / 6;
    }

    if (!selectedHexagonId.first || !selectedHexagonId.second) {
      return;
    }

    const from: Hexagon | undefined = selectedHexagons.get(
      selectedHexagonId.first
    );

    const to: Hexagon | undefined = selectedHexagons.get(
      selectedHexagonId.second
    );

    if (from && to) {
      const currentPaths: { q: number; r: number; s: number }[] =
        hexagonRouteDraw(from, to);

      const pathsArr: any[] = [];
      currentPaths.forEach(
        (currentPath: { q: number; r: number; s: number }) => {
          const hexagon: Hexagon | undefined = this.hexagonMap?.get(
            `q${currentPath.q}r${currentPath.r}s${currentPath.s}`
          );
          if (hexagon) {
            pathsArr.push({
              x: hexagon.x,
              y: hexagon.y,
            });
          }
        }
      );

      paths.push(new Path(this.context, pathsArr));
    }
  }

  public getDirectPathLine(
    fromHexagon: Hexagon,
    toHexagon: Hexagon,
    paths: Path[]
  ): void {
    const from: HexagonCoordinates = fromHexagon.attributes;
    const to: HexagonCoordinates = toHexagon.attributes;
    const lengthOfHexagonPath: number = this.calculatePath(from, to);

    const hexagonFrom: Hexagon | undefined = this.hexagonMap?.get(
      `q${from.q}r${from.r}s${from.s}`
    );
    const hexagonTo: Hexagon | undefined = this.hexagonMap?.get(
      `q${to.q}r${to.r}s${to.s}`
    );

    if (this.context && hexagonFrom && hexagonTo) {
      const vector: { x: number; y: number } = {
        x: (hexagonTo.x - hexagonFrom.x) / lengthOfHexagonPath,
        y: (hexagonTo.y - hexagonFrom.y) / lengthOfHexagonPath,
      };
      const vectors: { x: number; y: number }[] = [];

      for (
        let iteration: number = 0;
        iteration <= lengthOfHexagonPath;
        iteration++
      ) {
        vectors.push({
          x: hexagonFrom.x + vector.x * iteration,
          y: hexagonFrom.y + vector.y * iteration,
        });
      }

      paths.push(new Path(this.context, vectors));
    }
  }

  public getAllHexagonInPath(
    fromHexagon: Hexagon,
    toHexagon: Hexagon,
    paths: Path[]
  ): void {
    const from: HexagonCoordinates = fromHexagon.attributes;
    const to: HexagonCoordinates = toHexagon.attributes;

    const lengthOfHexagonPath: number = this.calculatePath(from, to);
    const arr: HexagonCoordinates[] = [];
    const currentCoordinates: HexagonCoordinates = from;

    arr.push(currentCoordinates);

    for (
      let iteration: number = 0;
      iteration < lengthOfHexagonPath;
      iteration++
    ) {
      if (
        arr[iteration].r !== to.r ||
        arr[iteration].q !== to.q ||
        arr[iteration].s !== to.s
      ) {
        if (this.isLeft(arr[iteration], to)) {
          this.pushPathPoint(arr, iteration, 0, -1, 1);
          // this.pushPathPoint(arr, iteration, 1, -1, 0);
        }

        if (this.isRight(arr[iteration], to)) {
          this.pushPathPoint(arr, iteration, -1, 1, 0);
          // this.pushPathPoint(arr, iteration, 0, 1, -1);
        }

        if (this.isBottomOrBottomRight(arr[iteration], to)) {
          this.pushPathPoint(arr, iteration, 1, 0, -1);
          // this.pushPathPoint(arr, iteration, 0, 1, -1);
        }

        if (this.isTopOrTopRight(arr[iteration], to)) {
          this.pushPathPoint(arr, iteration, -1, 0, 1);
          // this.pushPathPoint(arr, iteration, -1, 1, 0);
        }

        if (this.isTopOrTopLeft(arr[iteration], to)) {
          this.pushPathPoint(arr, iteration, 0, -1, 1);
          // this.pushPathPoint(arr, iteration, -1, 0, 1);
        }

        if (this.isBottomOrBottomLeft(arr[iteration], to)) {
          this.pushPathPoint(arr, iteration, 1, -1, 0);
          // this.pushPathPoint(arr, iteration, 1, 0, -1);
        }
      }
      if (arr[iteration].r === to.r) {
        const s: number = arr[iteration].s > to.s ? -1 : 1;
        const q: number = arr[iteration].q > to.q ? -1 : 1;
        this.pushPathPoint(arr, iteration, q, 0, s);
        // this.drawUpDown(from, to, iteration);
      }

      if (arr[iteration].q === to.q) {
        const r: number = arr[iteration].r > to.r ? -1 : 1;
        const s: number = arr[iteration].s > to.s ? -1 : 1;
        this.pushPathPoint(arr, iteration, 0, r, s);
        // this.drawLeftUpRightDown(from, to, iteration);
      }

      if (arr[iteration].s === to.s) {
        const r: number = arr[iteration].r > to.r ? -1 : 1;
        const q: number = arr[iteration].q > to.q ? -1 : 1;
        this.pushPathPoint(arr, iteration, q, r, 0);
        // this.drawRightUpLeftDown(from, to, iteration);
      }
    }

    this.context &&
      paths.push(
        new Path(
          this.context,
          arr.map((coordinates: HexagonCoordinates) => {
            const hexagon: Hexagon | undefined = this.hexagonMap?.get(
              `q${coordinates.q}r${coordinates.r}s${coordinates.s}`
            );
            if (!hexagon) {
              return {
                x: 0,
                y: 0,
              };
            }
            return {
              x: hexagon.x,
              y: hexagon.y,
            };
          })
        )
      );
  }

  private pushPathPoint(
    arr: HexagonCoordinates[],
    iteration: number,
    q: number,
    r: number,
    s: number
  ): void {
    arr.push({
      q: arr[iteration].q + q,
      r: arr[iteration].r + r,
      s: arr[iteration].s + s,
    });
  }

  private isBottomOrBottomRight(
    from: HexagonCoordinates,
    to: HexagonCoordinates
  ): boolean {
    return from.q < to.q && from.r < to.r && from.s > to.s;
  }

  private isBottomOrBottomLeft(
    from: HexagonCoordinates,
    to: HexagonCoordinates
  ): boolean {
    return from.q < to.q && from.r > to.r && from.s > to.s;
  }

  private isTopOrTopRight(
    from: HexagonCoordinates,
    to: HexagonCoordinates
  ): boolean {
    return from.q > to.q && from.r < to.r && from.s < to.s;
  }

  private isTopOrTopLeft(
    from: HexagonCoordinates,
    to: HexagonCoordinates
  ): boolean {
    return from.q > to.q && from.r > to.r && from.s < to.s;
  }

  private isLeft(from: HexagonCoordinates, to: HexagonCoordinates): boolean {
    return from.q < to.q && from.r > to.r && from.s < to.s;
  }

  private isRight(from: HexagonCoordinates, to: HexagonCoordinates): boolean {
    return from.q > to.q && from.r < to.r && from.s > to.s;
  }

  // private drawUpDown(
  //   from: HexagonCoordinates,
  //   to: HexagonCoordinates,
  //   iteration: number
  // ): void {}

  private drawLeftUpRightDown(
    from: HexagonCoordinates,
    to: HexagonCoordinates,
    iteration: number
  ): void {
    from.s > to.s
      ? this.hexagonMap
          ?.get(`q${from.q}r${from.r}s${from.s - iteration}`)
          ?.click()
      : this.hexagonMap?.get(`q${from.q}r${from.r}s${from.s}`)?.click();
  }

  // private drawRightUpLeftDown(
  //   from: HexagonCoordinates,
  //   to: HexagonCoordinates,
  //   iteration: number
  // ): void {}

  private calculatePath(
    from: HexagonCoordinates,
    to: HexagonCoordinates
  ): number {
    return (
      (Math.abs(
        from.q + this.hexagonFrameNumber - (to.q + this.hexagonFrameNumber)
      ) +
        Math.abs(
          from.s + this.hexagonFrameNumber - (to.s + this.hexagonFrameNumber)
        ) +
        Math.abs(
          from.r + this.hexagonFrameNumber - (to.r + this.hexagonFrameNumber)
        )) /
      2
    );
  }
}
