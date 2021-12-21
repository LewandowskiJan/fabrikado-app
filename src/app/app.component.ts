import { AnimationTriggerMetadata } from '@angular/animations';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { slideDownSlideUp } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideDownSlideUp],
})
export class AppComponent {
  public title: string = 'fabrikado-app';

  public constructor(private titleService: Title) {}

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }

  public prepareRoute(outlet: RouterOutlet): AnimationTriggerMetadata {
    return outlet?.activatedRouteData?.['animation'];
  }
}
