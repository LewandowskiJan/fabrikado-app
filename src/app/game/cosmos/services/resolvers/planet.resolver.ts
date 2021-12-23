import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';

import { SocketPlanetService } from 'src/app/services/socket.service';

import { CosmosService } from './../cosmos.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetResolver implements Resolve<boolean> {
  constructor(
    private cosmosService: CosmosService,
    private socketPlanetService: SocketPlanetService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.cosmosService.currentPlanetName = route.paramMap.get('id') || '';
    this.socketPlanetService.preparePlanet(
      this.cosmosService.currentPlanetName
    );
    return of(true);
  }
}
