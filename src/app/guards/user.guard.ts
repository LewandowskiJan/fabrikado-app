import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData, UserService } from '../domain/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanLoad {
  constructor(private userService: UserService) {}

  canLoad(): Observable<boolean> {
    return this.userService
      .getUserData()
      .pipe(map((response: UserData) => (response ? true : false)));
  }
}
