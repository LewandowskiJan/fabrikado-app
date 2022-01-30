import { SolarSystem } from './../../../../game/game-map/solar-system';
import { Universe } from './../../../../game/game-map/universe';
import { Planet } from './../../../../game/modules/game-map/planet/planet';
import { Galactic } from './../../../game-map/galactic';

export interface GameMap {
  universe: Map<string, Universe>;
  galaxies: Map<string, Galactic>;
  solarSystems: Map<string, SolarSystem>;
  planets: Map<string, Planet>;
}
