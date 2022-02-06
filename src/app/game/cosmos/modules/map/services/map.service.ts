import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GameMapEvents } from '@models/enums/game-map-events.map';
import { GameMapData } from '@models/interfaces/game/game-map/game-map-data';

import { SocketService } from '@domain/socket.service';

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
    this.socketService.sendToEvent(GameMapEvents.GAME_MAP_READ, position);
  }
}
