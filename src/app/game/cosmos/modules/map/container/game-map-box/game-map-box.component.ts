import { Component, HostListener } from '@angular/core';

import { ContextMenuModel } from '../context-menu/context-menu.component';

@Component({
  selector: 'app-game-map-box',
  templateUrl: './game-map-box.component.html',
  styleUrls: ['./game-map-box.component.scss'],
})
export class GameMapBoxComponent {
  public title: string = 'context-menu';
  public style: any | undefined;

  public isDisplayContextMenu: boolean | undefined;
  public rightClickMenuItems: Array<ContextMenuModel> = [];
  public rightClickMenuPositionX: number | undefined;
  public rightClickMenuPositionY: number | undefined;

  public displayContextMenu(event: any): void {
    this.isDisplayContextMenu = true;

    this.rightClickMenuItems = [
      {
        menuText: 'Refactor',
        menuEvent: 'Handle refactor',
      },
      {
        menuText: 'Format',
        menuEvent: 'Handle format',
      },
      {
        menuText: 'Deploy',
        menuEvent: 'Handle deploy',
      },
    ];

    this.rightClickMenuPositionX = event.clientX;
    this.rightClickMenuPositionY = event.clientY;
    this.style = this.getRightClickMenuStyle();
  }

  public getRightClickMenuStyle(): any {
    if (this.rightClickMenuPositionX)
      if (this.rightClickMenuPositionY)
        return {
          position: 'fixed',
          left: `${this.rightClickMenuPositionX}px`,
          top: `${this.rightClickMenuPositionY}px`,
        };
  }

  public handleMenuItemClick(event: any): void {
    switch (event.data) {
      case this.rightClickMenuItems[0].menuEvent:
        console.log('To handle refactor');
        break;
      case this.rightClickMenuItems[1].menuEvent:
        console.log('To handle formatting');
    }
  }

  @HostListener('document:click')
  public documentClick(): void {
    this.isDisplayContextMenu = false;
  }
}
