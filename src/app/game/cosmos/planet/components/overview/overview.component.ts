import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';

import { PlanetSocketData } from '@src/app/domain/endpoints/planet/planet-data';
import { SocketPlanetService } from '@src/app/services/socket.service';

import { CosmosService } from './../../../services/cosmos.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  public error$: Observable<string> = this.socketService.planetErrorListener();
  public planet$: Observable<PlanetSocketData | null> =
    this.socketService.onFetchPlanet();

  constructor(
    private socketService: SocketPlanetService,
    private cosmosService: CosmosService
  ) {
    this.socketService.preparePlanet(this.cosmosService.currentPlanetName);
    this.planet$ = this.socketService.onFetchPlanet();
  }
}
