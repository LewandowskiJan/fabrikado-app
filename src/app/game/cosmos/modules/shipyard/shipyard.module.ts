import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from './../../../../shared/layout/layout.module';
import { ShipyardDetailsComponent } from './components/shipyard-details/shipyard-details.component';
import { ShipyardComponent } from './containers/shipyard/shipyard.component';

@NgModule({
  declarations: [ShipyardComponent, ShipyardDetailsComponent],
  exports: [ShipyardComponent],
  imports: [CommonModule, LayoutModule],
})
export class ShipyardModule {}
