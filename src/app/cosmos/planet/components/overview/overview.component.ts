import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Resource } from '@src/app/models/resource';
import { SocketPlanetService } from '@src/app/services/socket.service';

import { PlanetSocketData } from '../../../../domain/endpoints/planet/planet-data';
import { PlanetService } from '../../../services/planet.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  public resources$: Observable<Resource> = this.socketService.onFetchSources();
  public error$: Observable<string> =
    this.socketService.planetErrorListener();
  public planet$: Observable<PlanetSocketData> =
    this.socketService.onFetchPlanet();

  constructor(
    private socketService: SocketPlanetService,
    private planetService: PlanetService
  ) {
    this.socketService.preparePlanet(this.planetService.planetId);
  }
}
