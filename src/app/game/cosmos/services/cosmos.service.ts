import { Injectable } from '@angular/core';

import { LogoutService } from '@src/app/unauthorized/landing-page/services/logout.service';

@Injectable({
  providedIn: 'root',
})
export class CosmosService {
  public currentPlanetName: string = '';
  public planetsName: string[] = [];

  constructor(private logoutService: LogoutService) {}

  public logout(): void {
    this.logoutService.logout();
  }
}
