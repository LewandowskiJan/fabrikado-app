import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from './../layout/layout.module';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CosmosComponent } from './containers/cosmos/cosmos.component';
import { PlanetComponent } from './containers/planet/planet.component';
import { CosmosRoutingModule } from './cosmos-routing.module';

@NgModule({
  declarations: [
    CosmosComponent,
    PlanetComponent,
    OverviewComponent,
    BuildingsComponent,
  ],
  imports: [CommonModule, CosmosRoutingModule, LayoutModule],
})
export class CosmosModule {}
