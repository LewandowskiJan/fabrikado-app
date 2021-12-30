import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlanetSocketData } from '@src/app/domain/endpoints/planet/planet-data';
import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';
import { Resource } from '@src/app/shared/models/resource';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor(private planetSocketService: PlanetSocketService) {}

  public resourceListener(): Observable<Resource> {
    return this.planetSocketService
      .onPlanetListening()
      .pipe(map((planet: PlanetSocketData) => planet.resources));
  }
}
