import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RestService } from './../rest.service';

export interface UserData {
  id: string;
  name: string;
  planets: string[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private restService: RestService) {}

  public getUserData(): Observable<UserData> {
    return this.restService
      .request<UserData>({ url: 'user' })
      .pipe(
        tap((response: UserData) => this.restService.setUserData(response))
      );
  }
}
