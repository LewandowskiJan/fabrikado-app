import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

import { ContextMenuModel } from '../../container/context-menu/context-menu.component';
import { DialogComponent } from '../../container/dialog/dialog.component';
import { Hexagon } from '../../model/hexagon';

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

  constructor(public dialog: MatDialog) {}

  public displayContextMenu(event: any): void {
    this.isDisplayContextMenu = true;

    this.rightClickMenuItems = [
      {
        menuText: 'Actions',
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
        this.openDialog(event.data);
        break;
      case this.rightClickMenuItems[1].menuEvent:
        console.log('To handle formatting');
    }
  }

  public openDialog(hexagon: Hexagon): void {
    const config: MatDialogConfig = {
      data: hexagon,
      panelClass: 'popup-modal',
    };
    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(
      DialogComponent,
      config
    );

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
