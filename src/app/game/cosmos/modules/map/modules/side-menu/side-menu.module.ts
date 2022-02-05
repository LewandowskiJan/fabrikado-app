import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AngularResizeEventModule } from 'angular-resize-event';

import { BottomBarComponent } from './containers/bottom-bar/bottom-bar.component';
import { SideMenuComponent } from './containers/side-menu/side-menu.component';
import { SideMenuCheckboxComponent } from './containers/side-menu-checkbox/side-menu-checkbox.component';
import { SideMenuPanelComponent } from './containers/side-menu-panel/side-menu-panel.component';
import { TestcontainerComponent } from './containers/testcontainer/testcontainer.component';
import { TopbarButtonsComponent } from './containers/topbar-buttons/topbar-buttons.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    SideMenuPanelComponent,
    TestcontainerComponent,
    BottomBarComponent,
    SideMenuCheckboxComponent,
    TopbarButtonsComponent,
  ],
  exports: [SideMenuComponent],
  imports: [
    CommonModule,
    DragDropModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    AngularResizeEventModule,
    ReactiveFormsModule,
  ],
})
export class SideMenuModule {}
