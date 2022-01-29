import { Planet } from './modules/game-map/planet/planet';
import { Player } from './modules/player/player';
import { GameMap } from './utils/models/map-data/game-map';

export class GameState {
  public static players: Player[] = [];

  public static planetsDiscovered: Planet[] = [];
  public static onGamePlayers: Map<string, Player> = new Map();

  public static specialObjects: any[] = [{ x: 200, y: 200 }];

  public static gameMap: GameMap;

  // public static dynamicData: DynamicGameData;
}
