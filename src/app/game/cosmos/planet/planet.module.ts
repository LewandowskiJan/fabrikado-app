import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@src/app/shared/layout/layout.module';
import { PlanetUiModule } from '@src/app/shared/layout/modules/planet/planet-ui.module';

import { BuildingModule } from '../modules/building/building.module';
import { AllianceComponent } from './components/alliance/alliance.component';
import { DefenceComponent } from './components/defence/defence.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { GalaxyRowComponent } from './components/galaxy/galaxy-row/galaxy-row.component';
import { GalaxyTableComponent } from './components/galaxy/galaxy-table/galaxy-table.component';
import { MarketComponent } from './components/market/market.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PlanetRedirectComponent } from './components/planet-redirect/planet-redirect.component';
import { ResearchComponent } from './components/research/research.component';
import { ShipyardComponent } from './components/shipyard/shipyard.component';
import { ShopComponent } from './components/shop/shop.component';
import { StaffComponent } from './components/staff/staff.component';
import { PlanetComponent } from './containers/planet/planet.component';
import { PlanetRoutingModule } from './planet-routing.module';

@NgModule({
  declarations: [
    PlanetComponent,
    OverviewComponent,
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
  imports: [
    CommonModule,
    PlanetRoutingModule,
    LayoutModule,
    BuildingModule,
    PlanetUiModule,
  ],
})
export class PlanetModule {}
