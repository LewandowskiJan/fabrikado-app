import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

import { Game } from './../../../game/game';
import { Player } from './../../../game/modules/player/player';
import { UnitType } from './../../../game/utils/models/enums/unit-type';
import { AllEvents } from './../../../sockets/configuration/socket-event.map';
import { UnitEvents } from './../../domain/endpoints/unit/unit-events.map';

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
      ({ unitType, planetName }: { unitType: UnitType; planetName: string }) =>
        Game.createUnit(planetName, unitType)
    );

    this.socket.on(UnitEvents.UNIT_READ, () => {
      this.io
        .to(this.player.playerRoomName)
        .emit(UnitEvents.UNIT_READ, this.player.currentPlanet.units);
    });
  }
}
