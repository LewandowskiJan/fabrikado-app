import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { from, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { UserData } from '@src/app/domain/services/user/user-data';

import { RestService } from './../../../../domain/services/rest.service';
import { CosmosService } from './../cosmos.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetGuard implements CanLoad {
  constructor(
    private cosmosService: CosmosService,
    private restService: RestService,
    private router: Router
  ) {}

  canLoad(): Observable<boolean> {
    if (this.cosmosService.planetsName.length !== 0) {
      return of(true);
    }

    if (localStorage.getItem('token')) {
      return this.restService
        .request<UserData>({ url: `user/${localStorage.getItem('token')}` })
        .pipe(
          tap(
            (userData: UserData) =>
              (this.cosmosService.planetsName = userData.planets)
          ),
          switchMap((userData: UserData) => {
            return from(
              this.router.navigateByUrl(
                // `/cosmos/planets/${userData.planets[0]}`
                '/cosmos/map'
              )
            );
          })
        );
    } else {
      return from(this.router.navigateByUrl('/welcome/login'));
    }
  }
}
