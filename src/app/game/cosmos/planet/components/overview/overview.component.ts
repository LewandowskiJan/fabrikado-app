import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { PlanetSocketData } from '@src/app/domain/endpoints/planet/planet-data';

import { PlanetSocketService } from '../../services/planet-socket.service';
import { CosmosService } from './../../../services/cosmos.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  public error$: Observable<string> =
    this.socketPlanetService.planetErrorListener();
  public planet$: Observable<PlanetSocketData | null> =
    this.socketPlanetService.onFetchPlanet();

  constructor(
    private socketPlanetService: PlanetSocketService,
    private cosmosService: CosmosService
  ) {
    this.socketPlanetService.preparePlanet(
      this.cosmosService.currentPlanetName
    );
    this.planet$ = this.socketPlanetService.onFetchPlanet();
  }
}
