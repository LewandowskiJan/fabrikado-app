import { Planet } from './components/planet/planet';
import { GameMap } from './game-map/generator.service';
import { Player } from './player/player';

export class GameState {
  public static players: Player[] = [];

  public static planetsDiscovered: Planet[] = [];
  public static onGamePlayers: Map<string, Player> = new Map();

  public static specialObjects: any[] = [{ x: 200, y: 200 }];

  public static gameMap: GameMap;
}
