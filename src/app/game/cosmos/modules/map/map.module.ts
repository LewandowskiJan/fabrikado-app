import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@src/app/shared/layout/layout.module';

import { ContextMenuComponent } from './container/context-menu/context-menu.component';
import { DialogComponent } from './container/dialog/dialog.component';
import { GameMapBoxComponent } from './container/game-map-box/game-map-box.component';
import { MapComponent } from './container/map/map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  declarations: [
    MapComponent,
    DialogComponent,
    ContextMenuComponent,
    GameMapBoxComponent,
  ],
  exports: [MapComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MapRoutingModule,
    LayoutModule,
  ],
})
export class MapModule {}
