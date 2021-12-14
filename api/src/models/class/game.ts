import {
  build,
  fetchBuildings,
} from './../../sockets/components/buildings/buildings.socket';
import { Server, Socket } from 'socket.io';
import { Resource } from '../interfaces/resource';
import { GameState } from './game-state';
import { Player } from './player';
import { BuildingType } from '../interfaces/buildingType';

const resources: Resource = {
  iron: 2,
  energy: 3,
};

export class Game {
  public static gameState: GameState;
  public static gameInterval: NodeJS.Timer;
  public static io: Server;

  public static startGame(io: Server): void {
    this.io = io;
    const player: Player = new Player();
    this.gameState = new GameState([player]);
    this.setupSocket();
    this.setupInterval();
  }

  private static setupSocket(): void {
    this.io.on('connection', (socket: Socket<any>) => {
      console.log('A user connected');

      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });

      socket.on('build', (buildingType: BuildingType) =>
        build(this.gameState.players[0].planets[0], buildingType)
      );

      socket.on('fetchBuildings', () =>
        fetchBuildings(this.io, this.gameState.players[0].planets[0].buildings)
      );

      socket.on('fetchSource', () => {
        console.log('fetchSource');
        this.io.emit('fetchSource', resources);
      });
    });
  }

  private static setupInterval(): void {
    if (!this.gameInterval) {
      this.gameInterval = setInterval(() => {
        console.log(this.gameState.players[0].planets[0].resources);
        this.gameState.players[0].planets[0].update();

        this.io.volatile.emit(
          'fetchSource',
          this.gameState.players[0].planets[0].resources
        );
      }, 1_000);
    }
  }
}
