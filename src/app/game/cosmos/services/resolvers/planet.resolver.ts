import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';

import { PlanetSocketService } from '../../planet/services/planet-socket.service';
import { CosmosService } from './../cosmos.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetResolver implements Resolve<boolean> {
  constructor(
    private cosmosService: CosmosService,
    private socketPlanetService: PlanetSocketService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.cosmosService.currentPlanetName = route.paramMap.get('id') || '';
    this.socketPlanetService.preparePlanet(
      this.cosmosService.currentPlanetName
    );
    return of(true);
  }
}
