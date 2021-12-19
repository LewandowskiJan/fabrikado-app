import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fadeInAnimation } from '../../../animation';

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
