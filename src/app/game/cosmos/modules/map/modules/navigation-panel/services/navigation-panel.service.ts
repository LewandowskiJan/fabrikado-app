import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PlanetEvents } from '@models/enums/planet-events.map';

import { SocketService } from '@src/app/domain/socket.service';

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
