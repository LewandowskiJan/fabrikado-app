import { BuildingType } from './../enums/building-type';

export interface BuildingOptions {
  type: BuildingType;
  level: number;
  name: string;
  averageTemperature: number;
}
