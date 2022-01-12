import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GameMapEvents } from '@src/app/domain/endpoints/map/game-map-events.map';

import { GameMapData } from './../../../../../domain/endpoints/map/game-map-data';
import { SocketService } from './../../../../../domain/services/socket.service';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  public gameMap$: Observable<GameMapData[]> =
    this.socketService.listeningOnEvent<GameMapData[]>(
      GameMapEvents.GAME_MAP_READ
    );

  public specialMap$: Observable<any> =
    this.socketService.listeningOnEvent<any>(
      GameMapEvents.GAME_MAP_SPECIAL_READ
    );

  constructor(private socketService: SocketService) {}

  public getMapData(): void {
    this.socketService.sendToEvent(GameMapEvents.GAME_MAP_READ);
  }
}
