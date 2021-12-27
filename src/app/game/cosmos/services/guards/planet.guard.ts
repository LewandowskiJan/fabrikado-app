import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { UserData } from '@src/app/domain/services/user/user-data';

import { RestService } from './../../../../domain/services/rest.service';
import { CosmosService } from './../cosmos.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetGuard implements CanLoad {
  constructor(
    private cosmosService: CosmosService,
    private restService: RestService
  ) {}

  canLoad(route: Route): Observable<boolean> {
    if (this.cosmosService.planetsName.length !== 0) {
      return of(true);
    }
    if (localStorage.getItem('token')) {
      this.restService
        .request<UserData>({ url: `user/${localStorage.getItem('token')}` })
        .pipe(take(1))
        .subscribe((user: UserData) => {
          this.cosmosService.planetsName = user.planets;
        });
      return of(true);
    } else {
      return of(false);
    }
  }
}
