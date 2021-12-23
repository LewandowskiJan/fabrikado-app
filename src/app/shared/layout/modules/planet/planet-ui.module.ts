import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlanetComponent } from './components/planet/planet.component';
import { PlanetViewComponent } from './components/planet-view/planet-view.component';

@NgModule({
  declarations: [PlanetComponent, PlanetViewComponent],
  imports: [CommonModule],
  exports: [PlanetComponent],
})
export class PlanetUiModule {}
