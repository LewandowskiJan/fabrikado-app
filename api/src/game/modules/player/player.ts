import { Server, Socket } from 'socket.io';

import { BuildingEvents } from './../../../../../src/app/domain/endpoints/buildings/building-events.map';
import { BuildingManager } from './../../../sockets/components/buildings/building-socket.manager';
import { GameMapManager } from './../../../sockets/components/map/game-map-socket.manager';
import { PlanetManager } from './../../../sockets/components/planet/planet-socket.manager';
import { ResourceManager } from './../../../sockets/components/resources/resource-socket.manager';
import { UnitManager } from './../../../sockets/components/unit/unit-socket.manager';
import { AllEvents } from './../../../sockets/configuration/socket-event.map';
import { PlanetEvents } from './../../../sockets/domain/endpoints/planet/planet-events.map';
import { Planet } from './../game-map/planet/planet';

export class Player {
  public id: string;
  public planets: Map<string, Planet> = new Map();
  public planetsName: string[];
  public currentPlanet: Planet;
  public playerRoomName: string;
  public currentPlayerPosition: string;

  constructor(playerPlanets: Planet[]) {
    if (playerPlanets && playerPlanets.length) {
      this.setupPlanet(playerPlanets);
      this.playerRoomName = playerPlanets[0].name;
      this.currentPlanet = playerPlanets[0];
      this.planetsName = playerPlanets.map((planet: Planet) => planet.name);
    }
  }

  public setupSocket(io: Server, socket: Socket<AllEvents, AllEvents>): void {
    socket.join(this.playerRoomName);

    PlanetManager.setupSockets(io, socket, this.playerRoomName, this);
    ResourceManager.setupSockets(io, socket, this.playerRoomName, this);
    BuildingManager.setupSockets(io, socket, this.playerRoomName, this);
    UnitManager.setupSockets(io, socket, this.playerRoomName, this);
    GameMapManager.setupSockets(io, socket, this.playerRoomName, this);

    const arr: string[] = Array.from(
      this.planets,
      ([key]: [string, Planet]): string => key
    );

    io.to(this.playerRoomName).emit(PlanetEvents.PLANET_GET_NAMES, arr);

    socket.on(PlanetEvents.PLANET_GET_NAMES, () => {
      const arr: string[] = Array.from(
        this.planets,
        ([key]: [string, Planet]): string => key
      );

      io.to(this.playerRoomName).emit(PlanetEvents.PLANET_GET_NAMES, arr);
    });
  }

  public updateData(io: Server): void {
    if (!this.currentPlanet) {
      this.currentPlanet = this.planets.get(this.planetsName[0]);
    }

    io.to(this.playerRoomName).emit(
      PlanetEvents.PLANET_READ,
      this.currentPlanet
    );

    if (this.currentPlanet.onUpgradeBuilding.length !== 0) {
      io.to(this.playerRoomName).emit(
        BuildingEvents.BUILDING_READ,
        this.currentPlanet.buildings
      );
    }
  }

  public getPlanet(io: Server, socket: Socket, planetName: string): void {
    this.changeRoom(socket, planetName);
    this.currentPlanet = this.planets.get(planetName);

    io.to(this.playerRoomName).emit(
      PlanetEvents.PLANET_READ,
      this.currentPlanet
    );
  }

  public changeRoom(socket: Socket, planetName: string): void {
    socket.leave(this.playerRoomName);
    this.playerRoomName = planetName;
    socket.join(planetName);
  }

  private setupPlanet(playerPlanets: Planet[]): void {
    playerPlanets.forEach((planet: Planet) => {
      this.planets.set(planet.name, planet);
    });
  }
}
