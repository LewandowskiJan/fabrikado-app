import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

import { AllEvents } from '@src/sockets/configuration/socket-event.map';

import { Coordinates } from '@game/model/coordinates/coordinates';
import { UnitType } from '@game/unit/factory/unit.abstract';

import { UnitEvents } from './../../../../../src/app/domain/endpoints/unit/unit-events.map';
import { Game } from './../../../game/game';
import { Player } from './../../../game/player/player';

export class UnitManager {
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
      UnitEvents.UNIT_ADD,
      ({
        unitType,
        coordinates,
      }: {
        unitType: UnitType;
        coordinates: Coordinates;
      }) => Game.createUnit(coordinates, unitType)
    );

    this.socket.on(UnitEvents.UNIT_READ, () => {
      this.io
        .to(this.player.playerRoomName)
        .emit(UnitEvents.UNIT_READ, this.player.currentPlanet.units);
    });
  }
}
