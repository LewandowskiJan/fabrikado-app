import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from './../../../../shared/layout/layout.module';
import { FleetDetailsComponent } from './components/fleet-details/fleet-details.component';
import { FleetComponent } from './containers/fleet/fleet.component';

@NgModule({
  declarations: [FleetDetailsComponent, FleetComponent],
  exports: [FleetComponent],
  imports: [CommonModule, LayoutModule],
})
export class FleetModule {}
