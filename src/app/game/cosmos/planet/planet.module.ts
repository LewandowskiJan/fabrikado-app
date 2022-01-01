import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@src/app/shared/layout/layout.module';
import { PlanetUiModule } from '@src/app/shared/layout/modules/planet/planet-ui.module';

import { BuildingModule } from '../modules/building/building.module';
import { ShipyardModule } from '../modules/shipyard/shipyard.module';
import { FleetModule } from './../modules/fleet/fleet.module';
import { TechnologyModule } from './../modules/technology/technology.module';
import { AllianceComponent } from './components/alliance/alliance.component';
import { DefenceComponent } from './components/defence/defence.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { GalaxyRowComponent } from './components/galaxy/galaxy-row/galaxy-row.component';
import { GalaxyTableComponent } from './components/galaxy/galaxy-table/galaxy-table.component';
import { MarketComponent } from './components/market/market.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PlanetRedirectComponent } from './components/planet-redirect/planet-redirect.component';
import { ShopComponent } from './components/shop/shop.component';
import { StaffComponent } from './components/staff/staff.component';
import { PlanetComponent } from './containers/planet/planet.component';
import { PlanetRoutingModule } from './planet-routing.module';

@NgModule({
  declarations: [
    PlanetComponent,
    OverviewComponent,
    MarketComponent,
    DefenceComponent,
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
    ShipyardModule,
    TechnologyModule,
    PlanetUiModule,
    FleetModule,
  ],
})
export class PlanetModule {}
