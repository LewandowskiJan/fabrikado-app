import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlanetModule } from '../planet/planet.module';
import { LayoutModule } from './../layout/layout.module';
import { AllianceComponent } from './components/alliance/alliance.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { DefenceComponent } from './components/defence/defence.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { MarketComponent } from './components/market/market.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PlanetRedirectComponent } from './components/planet-redirect/planet-redirect.component';
import { ResearchComponent } from './components/research/research.component';
import { ShipyardComponent } from './components/shipyard/shipyard.component';
import { ShopComponent } from './components/shop/shop.component';
import { StaffComponent } from './components/staff/staff.component';
import { CosmosComponent } from './containers/cosmos/cosmos.component';
import { PlanetComponent } from './containers/planet/planet.component';
import { CosmosRoutingModule } from './cosmos-routing.module';
import { GalaxyTableComponent } from './components/galaxy/galaxy-table/galaxy-table.component';
import { GalaxyRowComponent } from './components/galaxy/galaxy-row/galaxy-row.component';

@NgModule({
  declarations: [
    CosmosComponent,
    PlanetComponent,
    OverviewComponent,
    BuildingsComponent,
    MarketComponent,
    ResearchComponent,
    ShipyardComponent,
    DefenceComponent,
    FleetComponent,
    GalaxyComponent,
    AllianceComponent,
    StaffComponent,
    ShopComponent,
    PlanetRedirectComponent,
    GalaxyTableComponent,
    GalaxyRowComponent,
  ],
  imports: [CommonModule, CosmosRoutingModule, LayoutModule, PlanetModule],
})
export class CosmosModule {}
