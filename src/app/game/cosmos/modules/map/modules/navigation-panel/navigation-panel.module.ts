import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationPanelComponent } from './containers/navigation-panel/navigation-panel.component';

@NgModule({
  declarations: [NavigationPanelComponent],
  exports: [NavigationPanelComponent],
  imports: [CommonModule],
})
export class NavigationPanelModule {}
