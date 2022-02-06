import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { from, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { UserData } from '@models/interfaces/domain/user-data';

import { RestService } from '@src/app/domain/rest.service';
import { SocketService } from '@src/app/domain/socket.service';

import { Credentials } from '../model/credentials';
import { CosmosService } from './../../../game/cosmos/services/cosmos.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private restService: RestService,
    private router: Router,
    private cosmosService: CosmosService,
    private socketService: SocketService
  ) {}

  public sendUserCredentials(credentials: Credentials): Observable<boolean> {
    const options: any = {
      url: 'user/login',
      body: credentials,
    };

    return this.restService.requestPost<UserData[]>(options).pipe(
      map((userArray: UserData[]) => userArray[0]),
      tap((user: UserData) => this.restService.setUserData(user)),
      tap(() =>
        this.socketService.reconnect({
          options: {
            query: {
              token: localStorage.getItem('token'),
              id: localStorage.getItem('token'),
            },
          },
        })
      ),
      tap((user: UserData) => {
        this.cosmosService.planetsName = user.planets;
      }),
      switchMap((user: UserData) => {
        if (user) {
          return from(
            // this.router.navigateByUrl(`cosmos/planets/${user.planets[0]}`)
            this.router.navigateByUrl('cosmos/map')
          );
        } else {
          return from(this.router.navigateByUrl('welcome'));
        }
      })
    );
  }
}
