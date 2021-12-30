import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

import { AllEvents } from '@src/sockets/configuration/socket-event.map';

import { Coordinates } from '@game/coordinates/coordinates';

import { BuildingEvents } from './../../../../../src/app/domain/endpoints/buildings/building-events.map';
import { BuildingType } from './../../../game/building/configuration/buildingType';
import { Game } from './../../../game/game';
import { Player } from './../../../game/player/player';

export class BuildingManager {
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
    this.socket.on(
      BuildingEvents.BUILDING_ADD,
      ({
        buildingType,
        coordinates,
      }: {
        buildingType: BuildingType;
        coordinates: Coordinates;
      }) => Game.updateBuilding(coordinates, buildingType)
    );

    this.socket.on(BuildingEvents.BUILDING_READ, () => {
      this.io
        .to(this.player.playerRoomName)
        .emit(
          BuildingEvents.BUILDING_READ,
          this.player.currentPlanet.buildings
        );
    });
  }
}
