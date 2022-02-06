import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { PlanetSocketData } from '@models/interfaces/game/planet/planet-socket-data';

import { PlanetService } from '../../services/planet.service';
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
    this.planetService.getCurrentPlanetData();

  constructor(
    private socketPlanetService: PlanetSocketService,
    private cosmosService: CosmosService,
    private planetService: PlanetService
  ) {
    this.socketPlanetService.preparePlanet(
      this.cosmosService.currentPlanetName
    );
    this.socketPlanetService.onFetchPlanet();
  }
}
