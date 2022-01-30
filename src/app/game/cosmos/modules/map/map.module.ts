import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@src/app/shared/layout/layout.module';

import { RightClickMenuModule } from './../right-click-menu/right-click-menu.module';
import { DialogComponent } from './container/dialog/dialog.component';
import { GameMapBoxComponent } from './container/game-map-box/game-map-box.component';
import { MapComponent } from './container/map/map.component';
import { MapRoutingModule } from './map-routing.module';
import { NavigationPanelModule } from './modules/navigation-panel/navigation-panel.module';
import { SideMenuModule } from './modules/side-menu/side-menu.module';

@NgModule({
  declarations: [MapComponent, DialogComponent, GameMapBoxComponent],
  exports: [MapComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MapRoutingModule,
    LayoutModule,
    SideMenuModule,
    NavigationPanelModule,
    RightClickMenuModule,
  ],
})
export class MapModule {}
