import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GameMapEvents } from '@src/app/domain/endpoints/map/game-map-events.map';

import { GameMapData } from './../../../../../domain/endpoints/map/game-map-data';
import { SocketService } from './../../../../../domain/services/socket.service';

@Injectable({
  providedIn: 'any',
})
export class MapService {
  constructor(private socketService: SocketService) {}

  public getGameMapListener(): Observable<GameMapData[]> {
    return this.socketService.listeningOnEvent<GameMapData[]>(
      GameMapEvents.GAME_MAP_READ
    );
  }

  public getSpecialMapObjectListener(): Observable<any> {
    return this.socketService.listeningOnEvent<any>(
      GameMapEvents.GAME_MAP_SPECIAL_READ
    );
  }

  public getMapData(position: string = 'S-1'): void {
    console.log(position);
    this.socketService.sendToEvent(GameMapEvents.GAME_MAP_READ, position);
  }
}
