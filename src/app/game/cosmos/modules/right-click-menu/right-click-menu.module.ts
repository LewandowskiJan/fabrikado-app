import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RightClickMenuComponent } from './right-click-menu/right-click-menu.component';

@NgModule({
  declarations: [RightClickMenuComponent],
  exports: [RightClickMenuComponent],
  imports: [CommonModule],
})
export class RightClickMenuModule {}
