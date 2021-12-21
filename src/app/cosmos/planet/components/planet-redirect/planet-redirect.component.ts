import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PlanetService } from '@src/app/cosmos/services/planet.service';

@Component({
  selector: 'app-planet-redirect',
  templateUrl: './planet-redirect.component.html',
  styleUrls: ['./planet-redirect.component.scss'],
})
export class PlanetRedirectComponent {
  constructor(private router: Router, private planetService: PlanetService) {
    console.log(this.planetService.planetId);
    this.router.navigateByUrl(`/cosmos/planets/${this.planetService.planetId}`);
  }
}
