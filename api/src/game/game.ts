import { Server, Socket } from 'socket.io';
import { ExtendedError } from 'socket.io/dist/namespace';

import {
  AllEvents,
  ClientEvents,
} from '../sockets/configuration/socket-event.map';
import { BuildingEvents } from './../../../src/app/domain/endpoints/buildings/building-events.map';
import { GameMapEvents } from './../../../src/app/domain/endpoints/map/game-map-events.map';
import { PlayerEvents } from './../../../src/app/domain/endpoints/player/player-events.map';
import { addTestUserToDatabase } from './../db/test/user.mock';
import { BuildingType } from './components/building/configuration/buildingType';
import { Planet } from './components/planet/planet';
import { PlanetSearch } from './components/planet/util/planet-search.util';
import { UnitType } from './components/unit/factory/unit.abstract';
import { GameState } from './game.state';
import { GameConfiguration } from './game-configuration';
import { MapGeneratorService } from './game-map/generator.service';
import { Coordinates } from './model/coordinates/coordinates';
import { Player } from './player/player';

export class Game {
  public static gameConfiguration: GameConfiguration;
  public static gameInterval: NodeJS.Timer;
  public static io: Server;

  public static currentId: string;

  public static async startGame(io: Server): Promise<void> {
    this.io = io;
    this.generateMap();
    this.setupConfiguration();
    await addTestUserToDatabase();
    this.setupSocket();
    this.setupInterval();

    GameState.gameMap.solarSystems.forEach((ss: any) =>
      console.log(ss.planets.map((planet: any) => planet.name))
    );
  }

  public static generateMap(): void {
    GameState.gameMap = MapGeneratorService.generateUniverse();
  }

  public static getPlanetByCoordinates(coordinates: Coordinates): Planet {
    const createdIndexFromCoordinates: number =
      PlanetSearch.searchPlanetIndexByCoordinatesAndGameConfiguration(
        coordinates,
        this.gameConfiguration
      );
    // todo: change coordinates
    return GameState.gameMap.solarSystems.get('S-1').planets[0];
  }

  public static updateBuilding(
    planetCoordinate: Coordinates,
    buildingType: BuildingType
  ): void {
    Game.getPlanetByCoordinates(planetCoordinate).upgradeBuilding(buildingType);
  }

  public static createUnit(
    planetCoordinate: Coordinates,
    unitType: UnitType
  ): void {
    Game.getPlanetByCoordinates(planetCoordinate).createUnit(unitType);
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
