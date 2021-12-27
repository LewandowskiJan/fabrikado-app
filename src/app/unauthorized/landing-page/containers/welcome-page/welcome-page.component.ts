import { AnimationTriggerMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { slideInAnimation } from '../../animation';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  animations: [slideInAnimation],
})
export class WelcomePageComponent implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/cosmos/planets/');
    }
  }
  public prepareRoute(outlet: RouterOutlet): AnimationTriggerMetadata {
    return outlet?.activatedRouteData?.['animation'];
  }
}
