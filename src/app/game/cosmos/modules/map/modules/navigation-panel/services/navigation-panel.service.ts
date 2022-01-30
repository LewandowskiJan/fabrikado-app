import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { SocketService } from '@src/app/domain/services/socket.service';

import { PlanetEvents } from './../../../../../../../domain/endpoints/planet/planet-events.map';

@Injectable({
  providedIn: 'root',
})
export class NavigationPanelService {
  constructor(private socketService: SocketService) {}

  public fetchPlanetsName(): void {
    this.socketService.sendToEvent(PlanetEvents.PLANET_GET_NAMES, {});
  }

  public getPlanetsName(): Observable<string[]> {
    return this.socketService.listeningOnEvent(PlanetEvents.PLANET_GET_NAMES);
  }
}
