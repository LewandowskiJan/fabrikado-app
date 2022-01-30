import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

import { DialogComponent } from '../../map/container/dialog/dialog.component';
import { ElementsInsideHexagonData, Hexagon } from '../../map/model/hexagon';
import { rightClickMenuConfiguration } from '../configuration/right-click-menu.configuration';
import { RightClickMenuModel } from '../model/right-click-menu.model';
import { RightClickMenuEvent } from '../model/right-click-menu-event';
import { RightClickMenuType } from '../model/right-click-menu-type';

@Injectable({
  providedIn: 'root',
})
export class RightClickService {
  public title: string = 'context-menu';
  public style: any | undefined;
  public data: ElementsInsideHexagonData | undefined;

  public isDisplayContextMenu: boolean | undefined;

  public rightClickMenuPositionX: number | undefined;
  public rightClickMenuPositionY: number | undefined;

  constructor(public dialog: MatDialog) {}

  public displayContextMenu(event: any): void {
    this.isDisplayContextMenu = true;

    this.rightClickMenuPositionX = event.clientX;
    this.rightClickMenuPositionY = event.clientY;
    this.style = this.getRightClickMenuStyle();
  }

  public getMenuItems(
    elementInside: ElementsInsideHexagonData | undefined
  ): RightClickMenuModel[] {
    const type: RightClickMenuType = this.getType(elementInside);
    const defaultSettings: RightClickMenuModel[] = [
      { menuText: 'research', menuEvent: RightClickMenuEvent.RESEARCH },
    ];

    this.data = elementInside;

    return rightClickMenuConfiguration.get(type) || defaultSettings;
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
      case RightClickMenuEvent.RESEARCH:
        break;
      case RightClickMenuEvent.FLEET_OPTION:
      case RightClickMenuEvent.PLANET_OPTION:
        this.data && this.openDialog(this.data);
        break;
      default:
    }
  }

  public openDialog(elementInsideHexagonData: ElementsInsideHexagonData): void {
    const config: MatDialogConfig = {
      data: elementInsideHexagonData,
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

  private getType(
    elementInside: ElementsInsideHexagonData | undefined
  ): RightClickMenuType {
    let type: RightClickMenuType;

    if (elementInside) {
      if (elementInside.planet && elementInside.fleet.length > 0) {
        type = RightClickMenuType.ON_PLANET_FLEET;
      } else if (elementInside.planet) {
        type = RightClickMenuType.ON_PLANET;
      } else if (elementInside.fleet.length > 0) {
        type = RightClickMenuType.ON_FLEET;
      } else {
        type = RightClickMenuType.ON_EMPTY_HEXAGON;
      }
    } else {
      type = RightClickMenuType.OUTSIDE_MAP;
    }
    return type;
  }
}
