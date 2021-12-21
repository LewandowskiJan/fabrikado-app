import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { from, Observable, of } from 'rxjs';

import { SocketPlanetService } from 'src/app/services/socket.service';

import { PlanetService } from './../services/planet.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetResolver implements Resolve<boolean> {
  constructor(
    private socketService: SocketPlanetService,
    private planetService: PlanetService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id: string | null = route.paramMap.get('id');
    console.log('aaaa: ', id);
    if (id) {
      this.planetService.planetId = id;
      this.socketService.preparePlanet(id);
      return of(true);
    } else {
      return from(this.router.navigateByUrl('/cosmos'));
    }
  }
}
