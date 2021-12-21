import { AnimationTriggerMetadata } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../../animation';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  animations: [slideInAnimation],
})
export class WelcomePageComponent {
  public prepareRoute(outlet: RouterOutlet): AnimationTriggerMetadata {
    return outlet?.activatedRouteData?.['animation'];
  }
}
