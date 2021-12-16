import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { fadeInAnimation } from '../../animation';
import { PlanetSocketData } from './../../../domain/endpoints/planet/planet-data';
import { PlanetService } from './../../services/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  animations: [fadeInAnimation],
})
export class PlanetComponent {
  public prepareRoute(outlet: RouterOutlet): any {
    return outlet?.activatedRouteData?.['animation'];
  }
}
