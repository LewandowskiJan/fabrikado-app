import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RightClickMenuModel } from '@models/interfaces/game/game-map/right-click-menu.model';

@Component({
  selector: 'app-right-click-menu',
  templateUrl: './right-click-menu.component.html',
  styleUrls: ['./right-click-menu.component.scss'],
})
export class RightClickMenuComponent {
  @Input()
  public contextMenuItems: RightClickMenuModel[] | undefined;

  @Output()
  public onContextMenuItemClick: EventEmitter<any> = new EventEmitter<any>();

  public onContextMenuClick(event: any, data: any): any {
    this.onContextMenuItemClick.emit({
      event,
      data,
    });
  }
}
