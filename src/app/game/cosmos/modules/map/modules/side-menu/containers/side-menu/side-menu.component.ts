import { Component } from '@angular/core';

import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  width: number | undefined;
  height: number | undefined;

  onResized(event: ResizedEvent): void {
    this.width = event.newRect.width;
    this.height = event.newRect.height;
  }
}
