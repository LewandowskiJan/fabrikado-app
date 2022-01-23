import { Injectable } from '@angular/core';

import { ContextMenuModel } from '../../container/context-menu/context-menu.component';

@Injectable({
  providedIn: 'root',
})
export class RightClickService {
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
    ];

    this.rightClickMenuPositionX = event.clientX;
    this.rightClickMenuPositionY = event.clientY;
    this.style = this.getRightClickMenuStyle();
  }

  public getMenuItems(): any[] {
    return this.rightClickMenuItems;
  }

  public getRightClickMenuStyle(): any {
    if (this.rightClickMenuPositionX)
      if (this.rightClickMenuPositionY)
        return {
          position: 'fixed',
          left: `${this.rightClickMenuPositionX}px`,
          top: `${this.rightClickMenuPositionY}px`,
          'z-index': 99,
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
}
