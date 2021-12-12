import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlanetViewComponent } from './component/planet-view/planet-view.component';
import { PlanetComponent } from './planet/planet.component';
import { PlanetLayoutComponent } from './ui/planet-layout/planet-layout.component';

@NgModule({
  declarations: [PlanetComponent, PlanetLayoutComponent, PlanetViewComponent],
  imports: [CommonModule],
  exports: [PlanetComponent],
})
export class PlanetModule {}
