import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

import { Player } from './../../../game/modules/player/player';
import { AllEvents } from './../../../sockets/configuration/socket-event.map';
import { ResourceEvents } from './../../domain/endpoints/resource/resource-events.map';

export class ResourceManager {
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
    this.socket.on(ResourceEvents.RESOURCE_READ, () => {
      this.io
        .to(this.roomName)
        .emit(ResourceEvents.RESOURCE_READ, { metal: 50 });
    });
  }
}
