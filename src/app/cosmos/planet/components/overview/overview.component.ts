import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  public error$: Observable<string> = this.socketService.planetErrorListener();
  public planet$: Observable<PlanetSocketData | null> = of(null);

  constructor(
    private socketService: SocketPlanetService,
    private planetService: PlanetService
  ) {
    this.planet$ = this.socketService.onFetchPlanet().pipe(tap(console.log));
    this.socketService.preparePlanet(this.planetService.planetId);
  }
}
