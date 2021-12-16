import { Server, Socket } from 'socket.io';

import { BuildingType } from '@game/planet/building/buildingType';

import { fetchBuildings } from '../sockets/components/buildings/buildings.socket';
import { AllEvents } from '../sockets/configuration/socket-event.map';
import { Coordinates } from './coordinates/coordinates';
import { CoordinatesUtil } from './coordinates/coordinates.util';
import { Galaxy } from './galaxy/galaxy';
import { GameConfiguration } from './game-configuration';
import { PlanetFactory } from './planet/factory/planet.factory';
import { Planet } from './planet/planet';
import { SolarSystem } from './solar-system/solar-system';

export class Game {
  public static gameConfiguration: GameConfiguration;
  public static gameInterval: NodeJS.Timer;
  public static io: Server;

  public static currentId: string;

  public static galaxies: Galaxy[] = [];
  public static solarSystems: SolarSystem[] = [];
  public static planets: Planet[] = [];

  public static startGame(io: Server): void {
    this.io = io;
    this.setupConfiguration();
    this.setupGameState();
    this.setupSocket();
    this.setupInterval();
  }

  public static updateBuilding(
    planetCoordinate: Coordinates,
    buildingType: BuildingType
  ): void {
    this.planets
      .find((planet: Planet) => {
        console.log(planet);
        return CoordinatesUtil.compare(planet.coordinates, planetCoordinate);
      })
      .upgradeBuilding(buildingType);
  }

  private static setupConfiguration(): void {
    this.gameConfiguration = new GameConfiguration();
  }

  private static setupSocket(): void {
    this.io.on('connection', (socket: Socket<AllEvents, AllEvents>) => {
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
        const planet: Planet = Game.planets.find((planet: Planet) =>
          CoordinatesUtil.compare(planet.coordinates, {
            planetIndex: +Game.currentId,
            galacticIndex: 1,
            solarSystemIndex: 1,
          })
        );
        console.log(planet);
        this.io.emit('read:planet', planet.getData());
      });

      socket.on('fetchSource', () => {
        console.log('fetchSource');
        this.io.emit('fetchSource', { metal: 50 });
      });
    });
  }

  private static setupInterval(): void {
    if (!this.gameInterval) {
      this.gameInterval = setInterval(() => {
        this.planets
          .filter((planet: Planet) => !!planet.playerId)
          .forEach((planet: Planet) => {
            planet.upgradeResources();
          });
        this.io.volatile.emit(
          'fetchSource',
          this.planets[Game.currentId ? Game.currentId : 0].resources
        );
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
          this.planets.push(planet);
        }
      }
    }
  }
}
