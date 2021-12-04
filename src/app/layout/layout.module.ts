import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlanetContainerComponent } from './containers/planet-container/planet-container.component';

@NgModule({
  declarations: [PlanetContainerComponent],
  imports: [CommonModule],
  exports: [PlanetContainerComponent],
})
export class LayoutModule {}
