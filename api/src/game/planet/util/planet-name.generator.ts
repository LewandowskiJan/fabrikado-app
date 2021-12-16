import { Coordinates } from '@game/coordinates/coordinates';

const galaxySymbol: string = 'G';
const galaxyChars: string[] = ['C', 'S', 'W', 'E', 'N'];

const solarSystemSymbol: string = 'SY';
const solarSystemChars: string[] = 'ABCDEFGHIJKLMNOPRSTUVWYXZ'.split('');

const planetSymbol: string = 'P';
const planetChars: string[] = 'HNC'.split('');

export class PlanetNameGenerator {
  public static generatePlanetNameBaseOnCoordinates(
    coordinates: Coordinates
  ): string {
    const { galacticIndex, solarSystemIndex, planetIndex }: Coordinates =
      coordinates;

    const firstPart: string =
      PlanetNameGenerator.generateFirstPart(galacticIndex);

    const secondPart: string =
      PlanetNameGenerator.generateSecondPart(solarSystemIndex);

    const thirdPart: string =
      PlanetNameGenerator.generateThirdPart(planetIndex);

    return `${firstPart}-${secondPart}-${thirdPart}`;
  }

  private static generateFirstPart(galacticIndex: number): string {
    return `${galaxySymbol}${galacticIndex}${galaxyChars[galacticIndex - 1]}`;
  }

  private static generateSecondPart(solarSystemIndex: number): string {
    return `${solarSystemSymbol}${solarSystemIndex}${
      solarSystemChars[
        Math.floor(Math.random() * (solarSystemChars.length - 1))
      ]
    }${
      solarSystemChars[
        Math.floor(Math.random() * (solarSystemChars.length - 1))
      ]
    }`;
  }

  private static generateThirdPart(planetIndex: number): string {
    const planetLastPart: string =
      planetIndex <= 5
        ? planetChars[0]
        : planetIndex <= 10
        ? planetChars[1]
        : planetChars[2];
    return `${planetSymbol}${planetIndex}${planetLastPart}`;
  }
}
