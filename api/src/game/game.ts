import { Server, Socket } from 'socket.io';
import { ExtendedError } from 'socket.io/dist/namespace';

import { BuildingEvents } from '../../../src/app/shared/models/enums/building-events.map';
import { addTestUserToDatabase } from './../db/test/user.mock';
import {
  AllEvents,
  ClientEvents,
} from './../sockets/configuration/socket-event.map';
import { GameMapEvents } from './../sockets/domain/endpoints/map/game-map-events.map';
import { PlayerEvents } from './../sockets/domain/endpoints/player/player-events.map';
import { GameState } from './game.state';
import { GameConfiguration } from './game-configuration';
import { Planet } from './modules/game-map/planet/planet';
import { Player } from './modules/player/player';
import { GeneratorService } from './utils/generators/generator.service';
import { BuildingType } from './utils/models/enums/building-type';
import { UnitType } from './utils/models/enums/unit-type';

export class Game {
  public static gameConfiguration: GameConfiguration;
  public static gameInterval: NodeJS.Timer;
  public static io: Server;

  public static currentId: string;

  public static async startGame(io: Server): Promise<void> {
    this.io = io;
    console.info('\x1b[36m', '[Game] generating game map...');
    this.generateMap();
    console.info('\x1b[32m', '[Game] map generated');

    console.info('\x1b[36m', '[Game] setup configuration...');
    this.setupConfiguration();
    console.info('\x1b[32m', '[Game] configuration set success');

    console.info('\x1b[36m', '[Game] add test user to DB...');
    await addTestUserToDatabase();
    console.info('\x1b[32m', '[Game] users added');

    console.info('\x1b[36m', '[Game] setup sockets...');
    this.setupSocket();
    console.info('\x1b[32m', '[Game] setup - success');

    console.info('\x1b[36m', '[Game] setup game interval...');
    this.setupInterval();
    console.info('\x1b[32m', '[Game] setup interval - success');
  }

  public static generateMap(): void {
    GameState.gameMap = GeneratorService.generateGameMap();
  }

  public static getPlanetByPositionAndName(planetName: string): Planet {
    return GameState.gameMap.planets.get(planetName);
  }

  public static updateBuilding(
    planetName: string,
    buildingType: BuildingType
  ): void {
    Game.getPlanetByPositionAndName(planetName).upgradeBuilding(buildingType);
  }

  public static createUnit(planetName: string, unitType: UnitType): void {
    Game.getPlanetByPositionAndName(planetName).createUnit(unitType);
  }

  private static setupConfiguration(): void {
    this.gameConfiguration = new GameConfiguration();
  }

  private static setupSocket(): void {
    this.io
      .use(
        (
          socket: Socket<AllEvents, AllEvents>,
          next: (err?: ExtendedError) => void
        ) => {
          if (Game.checkAuthorization(socket)) {
            next();
          } else {
            next(new Error('Authentication error'));
          }
        }
      )
      .on(
        ClientEvents.SOCKET_CONNECTION,
        (socket: Socket<AllEvents, AllEvents>) => {
          const connectedUserId: string = socket.handshake.query.id as string;
          console.log('A user connected', connectedUserId);

          if (
            connectedUserId &&
            !GameState.onGamePlayers.has(connectedUserId)
          ) {
            const userPlanets: Planet[] = GameState.planetsDiscovered.filter(
              (planet: Planet) => planet.playerId === connectedUserId
            );

            const connectedPlayer: Player = new Player(userPlanets);
            connectedPlayer.setupSocket(this.io, socket);
            GameState.onGamePlayers.set(connectedPlayer.id, connectedPlayer);
            this.io
              .to(connectedPlayer.playerRoomName)
              .emit(PlayerEvents.PLAYER_READ, connectedPlayer);
          }

          socket.on(ClientEvents.SOCKET_DISCONNECT, () => {
            console.log('A user disconnected', connectedUserId);
            GameState.onGamePlayers.delete(connectedUserId);
          });
        }
      );
  }

  private static checkAuthorization(
    socket: Socket<AllEvents, AllEvents>
  ): boolean {
    if (
      socket.handshake.query &&
      socket.handshake.query.token &&
      socket.handshake.query.id
    ) {
      // jwt.verify(
      //   socket.handshake.query.token,
      //   'SECRET_KEY',
      //   (err, decoded) => {
      //     if (err) return next(new Error('Authentication error'));
      //     socket.decoded = decoded;
      //     next();
      //   }
      // );
      return true;
    }
    return false;
  }

  private static setupInterval(): void {
    if (
      !this.gameInterval &&
      GameState.planetsDiscovered[Game.currentId ? Game.currentId : 0]
    ) {
      this.io.emit(
        BuildingEvents.BUILDING_UPDATE,
        GameState.planetsDiscovered[Game.currentId ? Game.currentId : 0]
          .onUpgradeBuilding
      );

      this.gameInterval = setInterval(() => {
        this.io.emit(
          GameMapEvents.GAME_MAP_SPECIAL_READ,
          GameState.specialObjects[0]
        );

        GameState.onGamePlayers.forEach((player: Player) => {
          player.planets.size && player.updateData(this.io);
        });

        GameState.planetsDiscovered.forEach((planet: Planet) => {
          if (planet.onUpgradeBuilding.length !== 0) {
            planet.decrementTimeOfBuildingUpdate();
          }
          if (planet.onCreatingUnit.length !== 0) {
            planet.decrementTimeOfUnitCreation();
          }
          planet.upgradeResources();
        });

        GameState.specialObjects.forEach(
          (special: { x: number; y: number }) => {
            if (special.x > 2000 || special.y > 2000) {
              special.x = 0;
              special.y = 0;
            }
            special.x += 10;
            special.y += 10;
          }
        );
      }, 1_000);
    }
  }
}
