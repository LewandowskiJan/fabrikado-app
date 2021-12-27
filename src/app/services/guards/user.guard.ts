import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(): Observable<boolean> {
    return !localStorage.getItem('token')
      ? from(this.router.navigateByUrl('/welcome/login'))
      : of(true);
  }
}
