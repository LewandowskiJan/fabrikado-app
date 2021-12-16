import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';

import { SocketService } from 'src/app/services/socket.service';

import { PlanetService } from './../services/planet.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetResolver implements Resolve<boolean> {
  constructor(
    private socketService: SocketService,
    private planetService: PlanetService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id: string = route.paramMap.get('id') || '1';
    this.socketService.preparePlanet(id);
    this.planetService.planetId = id;
    return of(true);
  }
}
