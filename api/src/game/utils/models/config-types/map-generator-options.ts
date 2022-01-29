import { Coordinates } from './../coordinates';

export interface MapGeneratorOptions {
  universe: string;
  galactic?: string;
  solarSystem?: string;
  coordinates?: Coordinates;
}
