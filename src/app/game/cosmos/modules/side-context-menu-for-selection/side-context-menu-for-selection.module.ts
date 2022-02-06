import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SideContextMenuForSelectionComponent } from './side-context-menu-for-selection/side-context-menu-for-selection.component';

@NgModule({
  declarations: [SideContextMenuForSelectionComponent],
  exports: [SideContextMenuForSelectionComponent],
  imports: [CommonModule],
})
export class SideContextMenuForSelectionModule {}
