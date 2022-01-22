import { Coordinates } from '../../../model/coordinates/coordinates';

export interface PathData {
  startPosition: Coordinates;
  endPosition: Coordinates;
  distance: number;
}

export class Path {
  startPosition: Coordinates;
  endPosition: Coordinates;
  distance: number;

  public getPathData(): PathData {
    return {
      startPosition: this.startPosition,
      endPosition: this.endPosition,
      distance: this.distance,
    };
  }
}
