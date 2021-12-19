import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetGuard implements CanLoad {
  canLoad(route: Route): Observable<boolean> {
    return of(true);
  }
}
