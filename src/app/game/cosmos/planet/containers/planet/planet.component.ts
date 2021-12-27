import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { fadeInAnimation } from '../../../animation';
import { CosmosService } from './../../../services/cosmos.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  animations: [fadeInAnimation],
})
export class PlanetComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private cosmosService: CosmosService
  ) {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.cosmosService.currentPlanetName = id;
  }

  public prepareRoute(outlet: RouterOutlet): any {
    return outlet?.activatedRouteData?.['animation'];
  }

  public logout(): void {
    this.cosmosService.logout();
  }
}
