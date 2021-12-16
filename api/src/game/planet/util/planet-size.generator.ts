type PlanetIndex = number;
type PlanetSizeModifier = number;

const sizeConfiguration: Map<PlanetIndex, PlanetSizeModifier> = new Map([
  [1, 50],
  [2, 60],
  [3, 70],
  [4, 80],
  [5, 85],
  [6, 90],
  [7, 95],
  [8, 100],
  [9, 95],
  [10, 90],
  [11, 85],
  [12, 80],
  [13, 70],
  [14, 60],
  [15, 50],
]);

export class PlanetSizeGenerator {
  public static generatePlanetSizeByPlanetIndex(planetIndex: number): number {
    const modifier: number = sizeConfiguration.get(planetIndex);
    const minSize: number = modifier - 10;
    return Math.floor(minSize + 20 * Math.random()) * 1_000_000;
  }
}
