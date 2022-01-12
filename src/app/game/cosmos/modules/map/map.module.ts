import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ContextMenuComponent } from './container/context-menu/context-menu.component';
import { DialogComponent } from './container/dialog/dialog.component';
import { GameMapBoxComponent } from './container/game-map-box/game-map-box.component';
import { MapComponent } from './container/map/map.component';

@NgModule({
  declarations: [
    MapComponent,
    DialogComponent,
    ContextMenuComponent,
    GameMapBoxComponent,
  ],
  exports: [MapComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class MapModule {}
