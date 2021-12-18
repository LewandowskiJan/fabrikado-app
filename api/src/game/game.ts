import { Server, Socket } from 'socket.io';
import { ExtendedError } from 'socket.io/dist/namespace';

import { fetchBuildings } from '../sockets/components/buildings/buildings.socket';
import { AllEvents } from '../sockets/configuration/socket-event.map';
import { BuildingType } from './building/configuration/buildingType';
import { Coordinates } from './coordinates/coordinates';
import { Galaxy } from './galaxy/galaxy';
import { GameConfiguration } from './game-configuration';
import { PlanetFactory } from './planet/factory/planet.factory';
import { Planet } from './planet/planet';
import { PlanetSearch } from './planet/util/planet-search.util';
import { SolarSystem } from './solar-system/solar-system';

export class Game {
  public static gameConfiguration: GameConfiguration;
  public static gameInterval: NodeJS.Timer;
  public static io: Server;

  public static currentId: string;

  public static galaxies: Galaxy[] = [];
  public static solarSystems: SolarSystem[] = [];
  public static planets: Planet[] = [];

  public static planetsDiscovered: Planet[] = [];

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

    return Game.planets[createdIndexFromCoordinates];
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

      .on('connection', (socket: Socket<AllEvents, AllEvents>) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
          console.log('A user disconnected');
        });

        socket.on('add:building', (buildingType: BuildingType) =>
          Game.updateBuilding(
            { planetIndex: 1, galacticIndex: 1, solarSystemIndex: 1 },
            buildingType
          )
        );

        socket.on('fetchBuildings', () =>
          fetchBuildings(this.io, this.planets[0].buildings)
        );

        socket.on('prepare:planet', (id: string) => {
          Game.currentId = id;
        });

        socket.on('read:planet', () => {
          const planet: Planet = Game.getPlanetByCoordinates({
            galacticIndex: 1,
            solarSystemIndex: 1,
            planetIndex: +Game.currentId,
          });

          if (planet) {
            this.io.emit('read:planet', planet.getData());
            this.io.emit('error:planet', undefined);
          } else {
            this.io.emit('error:planet', 'no planet on given coordinates');
          }
        });

        socket.on('fetchSource', () => {
          this.io.emit('fetchSource', { metal: 50 });
        });
      });
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
        'onupdate:buildings',
        this.planetsDiscovered[Game.currentId ? Game.currentId : 0]
          .onUpgradeBuilding
      );

      this.gameInterval = setInterval(() => {
        this.planetsDiscovered.forEach((planet: Planet) => {
          if (planet.onUpgradeBuilding.length !== 0) {
            planet.decrementBuildingUpdateTime();
          }
          planet.upgradeResources();
        });
        this.io.emit('fetchSource', this.planetsDiscovered[0].resources);
        fetchBuildings(this.io, this.planetsDiscovered[0].buildings);
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
      this.galaxies.push(galaxy);
      for (
        let solarSystemIndex: number = 1;
        solarSystemIndex <= this.gameConfiguration.solarSystemNumber;
        solarSystemIndex++
      ) {
        const solarSystem: SolarSystem = new SolarSystem(
          solarSystemIndex,
          galacticIndex
        );
        this.solarSystems.push(solarSystem);

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
    if (planet.playerId) Game.planetsDiscovered.push(planet);
    Game.planets.push(planet);
  }
}
