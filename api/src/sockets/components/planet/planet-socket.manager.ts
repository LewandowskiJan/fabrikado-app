import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

import { PlanetData } from './../../../game//modules/game-map/planet/factory/planet.factory';
import { Game } from './../../../game/game';
import { Planet } from './../../../game/modules/game-map/planet/planet';
import { Player } from './../../../game/modules/player/player';
import { AllEvents } from './../../../sockets/configuration/socket-event.map';
import { PlanetEvents } from './../../domain/endpoints/planet/planet-events.map';

export class PlanetManager {
  public static io: Server;
  public static socket: Socket<AllEvents, AllEvents, DefaultEventsMap, any>;
  public static userId: string | undefined;
  public static roomName: string | undefined;
  public static player: Player | undefined;

  public static setupSockets(
    io: Server,
    socket: Socket<AllEvents, AllEvents, DefaultEventsMap, any>,
    roomName: string,
    player: Player
  ): void {
    this.io = io;
    this.socket = socket;
    this.roomName = roomName;
    this.userId = socket.handshake.query.id as string;
    this.player = player;
    this.setupEvents();
  }

  public static setupEvents(): void {
    this.socket.on(PlanetEvents.PLANET_PREPARE, (name: string) => {
      this.player.currentPlanet = this.player.planets.get(name);
      this.io.emit(PlanetEvents.PLANET_PREPARE, this.player.currentPlanet);
    });

    this.socket.on(PlanetEvents.PLANET_READ, () => {
      const planet: Planet = Game.getPlanetByCoordinates({
        galacticIndex: 1,
        solarSystemIndex: 1,
        planetIndex: 1,
        hexagon: null,
      });

      if (planet) {
        this.io
          .to(this.roomName)
          .emit(PlanetEvents.PLANET_READ, planet.getData());
        this.io.to(this.roomName).emit(PlanetEvents.PLANET_ERROR, undefined);
      } else {
        this.io
          .to(this.roomName)
          .emit(PlanetEvents.PLANET_ERROR, 'no planet on given coordinates');
      }
    });
  }

  public static getPlanetDataByIndex(): PlanetData {
    return new Planet({} as any).getData();
  }
}
