import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { Observable, of } from 'rxjs';

import { CosmosService } from './../cosmos.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetGuard implements CanLoad {
  constructor(private cosmosService: CosmosService) {}

  canLoad(route: Route): Observable<boolean> {
    if (this.cosmosService.planetsName.length === 0) {
      return of(false);
    } else {
      return of(true);
    }
  }
}
