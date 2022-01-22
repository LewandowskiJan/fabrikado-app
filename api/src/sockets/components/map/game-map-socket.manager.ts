import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

import { GameState } from './../../../game/game.state';
import { Player } from './../../../game/modules/player/player';
import { AllEvents } from './../../../sockets/configuration/socket-event.map';
import { GameMapEvents } from './../../domain/endpoints/map/game-map-events.map';

export class GameMapManager {
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
    this.socket.on(GameMapEvents.GAME_MAP_PREPARE, () => void 0);

    this.socket.on(GameMapEvents.GAME_MAP_READ, (position: string) => {
      // console.log(GameState.hexagonsData);
      console.log(position);
      this.player.currentPlayerPosition = position;
      this.io
        .to(this.player.playerRoomName)
        .emit(
          GameMapEvents.GAME_MAP_READ,
          GameState.gameMap.solarSystems.get(position).hexagonsData
        );
    });

    this.socket.on(GameMapEvents.GAME_MAP_READ, () => {
      // console.log(GameState.hexagonsData);
      this.io
        .to(this.player.playerRoomName)
        .emit(
          GameMapEvents.GAME_MAP_READ,
          GameState.gameMap.solarSystems.get('S-1').hexagonsData
        );
    });
  }
}
