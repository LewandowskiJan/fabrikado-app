import { Server, Socket } from 'socket.io';
import { ExtendedError } from 'socket.io/dist/namespace';

import {
  AllEvents,
  ClientEvents,
} from '../sockets/configuration/socket-event.map';
import { BuildingEvents } from './../../../src/app/domain/endpoints/buildings/building-events.map';
import { PlayerEvents } from './../../../src/app/domain/endpoints/player/player-events.map';
import { BuildingType } from './building/configuration/buildingType';
import { Coordinates } from './coordinates/coordinates';
import { Galaxy } from './galaxy/galaxy';
import { GameState } from './game.state';
import { GameConfiguration } from './game-configuration';
import { PlanetFactory } from './planet/factory/planet.factory';
import { Planet } from './planet/planet';
import { PlanetSearch } from './planet/util/planet-search.util';
import { Player } from './player/player';
import { SolarSystem } from './solar-system/solar-system';

export class Game {
  public static gameConfiguration: GameConfiguration;
  public static gameInterval: NodeJS.Timer;
  public static io: Server;

  public static currentId: string;

  public static startGame(io: Server): void {
    this.io = io;
    this.setupConfiguration();
    this.setupGameState();
    this.setupSocket();
    this.setupInterval();
  }

  public static getPlanetByCoordinates(coordinates: Coordinates): Planet {
    const createdIndexFromCoordinates: number =
      PlanetSearch.searchPlanetIndexByCoordinatesAndGameConfiguration(
        coordinates,
        this.gameConfiguration
      );

    return GameState.planets[createdIndexFromCoordinates];
  }

  public static updateBuilding(
    planetCoordinate: Coordinates,
    buildingType: BuildingType
  ): void {
    Game.getPlanetByCoordinates(planetCoordinate).upgradeBuilding(buildingType);
  }

  private static setupConfiguration(): void {
    this.gameConfiguration = new GameConfiguration();
  }

  private static setupSocket(): void {
    console.log('here');
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
    if (socket.handshake.query && socket.handshake.query.token) {
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
    if (!this.gameInterval) {
      this.io.emit(
        BuildingEvents.BUILDING_UPDATE,
        GameState.planetsDiscovered[Game.currentId ? Game.currentId : 0]
          .onUpgradeBuilding
      );

      this.gameInterval = setInterval(() => {
        GameState.onGamePlayers.forEach((player: Player) => {
          player.updateData(this.io);
        });

        GameState.planetsDiscovered.forEach((planet: Planet) => {
          if (planet.onUpgradeBuilding.length !== 0) {
            planet.decrementBuildingUpdateTime();
          }
          planet.upgradeResources();
        });
      }, 1_000);
    }
  }

  private static setupGameState(): void {
    this.gameConfiguration;

    for (
      let galacticIndex: number = 1;
      galacticIndex <= this.gameConfiguration.galaxyNumber;
      galacticIndex++
    ) {
      const galaxy: Galaxy = new Galaxy(galacticIndex);
      GameState.galaxies.push(galaxy);
      for (
        let solarSystemIndex: number = 1;
        solarSystemIndex <= this.gameConfiguration.solarSystemNumber;
        solarSystemIndex++
      ) {
        const solarSystem: SolarSystem = new SolarSystem(
          solarSystemIndex,
          galacticIndex
        );
        GameState.solarSystems.push(solarSystem);

        for (
          let planetIndex: number = 1;
          planetIndex <= this.gameConfiguration.planetsInSolarSystem;
          planetIndex++
        ) {
          const planet: Planet = PlanetFactory.generatePlanet({
            galacticIndex,
            solarSystemIndex,
            planetIndex,
          });

          Game.pushPlanetToArray(planet);
        }
      }
    }
  }

  private static pushPlanetToArray(planet: Planet): void {
    if (planet.playerId) GameState.planetsDiscovered.push(planet);
    GameState.planets.push(planet);
  }
}
