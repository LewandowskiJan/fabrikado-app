import { Galaxy } from './components/galaxy/galaxy';
import { Planet } from './components/planet/planet';
import { SolarSystem } from './components/solar-system/solar-system';
import { Hexagon } from './game-map/model/hexagon';
import { Player } from './player/player';

export class GameState {
  public static players: Player[] = [];

  public static galaxies: Galaxy[] = [];
  public static solarSystems: SolarSystem[] = [];
  public static planets: Planet[] = [];

  public static planetsDiscovered: Planet[] = [];
  public static onGamePlayers: Map<string, Player> = new Map();

  public static hexagons: Hexagon[] = [];
  public static hexagonMap: Map<string, Hexagon> = new Map();
  public static hexagonsData: any[] = [];
}
