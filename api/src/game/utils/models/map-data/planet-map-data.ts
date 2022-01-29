import { PlanetCompositionType } from './../enums/planet-composition-type';

export interface PlanetMapData {
  planetName: string;
  planetType: PlanetCompositionType;
  planetSize: number;
  armySize: number;
  defenceLevel: number;
  moonsNumber: number;
  isUnderSiege: boolean;
}
