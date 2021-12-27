import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlanetSocketService } from '../../planet/services/planet-socket.service';

@Component({
  selector: 'app-cosmos-start-page',
  templateUrl: './cosmos-start-page.component.html',
  styleUrls: ['./cosmos-start-page.component.scss'],
})
export class CosmosStartPageComponent {
  public firstPlanetId$: Observable<any> = this.socketPlanetService
    .getPlayerData()
    .pipe(map((res: any) => res.currentPlanet.name));
  constructor(private socketPlanetService: PlanetSocketService) {}
}
