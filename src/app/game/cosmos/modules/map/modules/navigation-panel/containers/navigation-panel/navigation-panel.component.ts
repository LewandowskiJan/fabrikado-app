import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { PlanetService } from '@src/app/game/cosmos/planet/services/planet.service';

import { NavigationPanelService } from './../../services/navigation-panel.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
})
export class NavigationPanelComponent implements OnInit {
  @Output() public navigateToPlanet: EventEmitter<string> = new EventEmitter();

  public myPlanets$: Observable<string[]> | undefined;

  public myCurrentPlanets$: Observable<any> =
    this.planetService.getCurrentPlanetData();

  constructor(
    private planetService: PlanetService,
    private navigationPanelService: NavigationPanelService
  ) {}

  ngOnInit(): void {
    this.navigationPanelService.fetchPlanetsName();
    this.myPlanets$ = this.navigationPanelService.getPlanetsName();
  }

  public navigate(planetName: string): void {
    const solarSystemDecodeName: string =
      planetName.split('-')[1].split('')[0] +
      '-' +
      planetName.split('-')[1].split('')[2];

    this.navigateToPlanet.emit(solarSystemDecodeName);
  }
}
