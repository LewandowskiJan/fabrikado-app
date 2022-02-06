import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@src/app/shared/layout/layout.module';

import { SideContextMenuForSelectionModule } from '../side-context-menu-for-selection/side-context-menu-for-selection.module';
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
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MapRoutingModule,
    LayoutModule,
    SideMenuModule,
    NavigationPanelModule,
    RightClickMenuModule,
    DragDropModule,
    MatCheckboxModule,
    SideContextMenuForSelectionModule,
  ],
})
export class MapModule {}
