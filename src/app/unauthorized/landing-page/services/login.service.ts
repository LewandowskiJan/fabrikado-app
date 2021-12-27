import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { from, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { UserData } from '@src/app/domain/services/user/user-data';

import { Credentials } from '../model/credentials';
import { RestService } from './../../../domain/services/rest.service';
import { CosmosService } from './../../../game/cosmos/services/cosmos.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private restService: RestService,
    private router: Router,
    private cosmosService: CosmosService
  ) {}

  public sendUserCredentials(credentials: Credentials): Observable<boolean> {
    const options: any = {
      url: 'user/login',
      body: credentials,
    };

    return this.restService.requestPost<UserData[]>(options).pipe(
      map((userArray: UserData[]) => userArray[0]),
      tap((user: UserData) => this.restService.setUserData(user)),
      tap((user: UserData) => {
        this.cosmosService.planetsName = user.planets;
      }),
      switchMap((user: UserData) => {
        if (user) {
          return from(
            this.router.navigateByUrl(`cosmos/planets/${user.planets[0]}`)
          );
        } else {
          return from(this.router.navigateByUrl('welcome'));
        }
      })
    );
  }
}
