import { Galaxy } from './galaxy/galaxy';
import { Planet } from './planet/planet';
import { Player } from './player/player';
import { SolarSystem } from './solar-system/solar-system';

export class GameState {
  public static galaxies: Galaxy[] = [];
  public static solarSystems: SolarSystem[] = [];
  public static planets: Planet[] = [];

  public static planetsDiscovered: Planet[] = [];
  public static onGamePlayers: Map<string, Player> = new Map();
}
