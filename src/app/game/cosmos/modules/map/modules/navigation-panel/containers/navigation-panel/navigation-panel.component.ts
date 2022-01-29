import { Component, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { PlanetService } from '@src/app/game/cosmos/planet/services/planet.service';
import { PlanetSocketService } from '@src/app/game/cosmos/planet/services/planet-socket.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
})
export class NavigationPanelComponent {
  @Output() public navigateToPlanet: EventEmitter<string> = new EventEmitter();

  public myPlanets$: Observable<string[]> =
    this.planetSocketService.getPlanetsName();
  public myCurrentPlanets$: Observable<any> =
    this.planetService.getCurrentPlanetData();

  constructor(
    private planetSocketService: PlanetSocketService,
    private planetService: PlanetService
  ) {}

  public navigate(planetName: string): void {
    const solarSystemDecodeName: string =
      planetName.split('-')[1].split('')[0] +
      planetName.split('-')[1].split('')[2];

    this.navigateToPlanet.emit(solarSystemDecodeName);
  }
}
