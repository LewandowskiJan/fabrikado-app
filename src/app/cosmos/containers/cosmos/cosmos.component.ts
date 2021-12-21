import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SocketPlanetService } from '@src/app/services/socket.service';

import { fadeAnimation } from '../../animation';

@Component({
  selector: 'app-cosmos',
  templateUrl: './cosmos.component.html',
  styleUrls: ['./cosmos.component.scss'],
  animations: [fadeAnimation],
})
export class CosmosComponent {
  public planetsNames$: Observable<string[]> = this.socketPlanetService
    .getPlanetsName()
    .pipe(tap(console.log));

  constructor(private socketPlanetService: SocketPlanetService) {}

  public prepareRoute(outlet: RouterOutlet): any {
    return {
      value: outlet?.activatedRoute?.snapshot?.params?.id,
    };
  }
}
