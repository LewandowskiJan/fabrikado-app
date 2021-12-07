import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllianceComponent } from './components/alliance/alliance.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { DefenceComponent } from './components/defence/defence.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { MarketComponent } from './components/market/market.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ResearchComponent } from './components/research/research.component';
import { ShipyardComponent } from './components/shipyard/shipyard.component';
import { ShopComponent } from './components/shop/shop.component';
import { StaffComponent } from './components/staff/staff.component';
import { CosmosComponent } from './containers/cosmos/cosmos.component';
import { PlanetComponent } from './containers/planet/planet.component';

const routes: Routes = [
  {
    path: '',
    component: CosmosComponent,
    children: [
      {
        path: 'planet/:id',
        component: PlanetComponent,
        children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: OverviewComponent },
          { path: 'buildings', component: BuildingsComponent },
          { path: 'market', component: MarketComponent },
          { path: 'research', component: ResearchComponent },
          { path: 'shipyard', component: ShipyardComponent },
          { path: 'defence', component: DefenceComponent },
          { path: 'fleet', component: FleetComponent },
          { path: 'galaxy', component: GalaxyComponent },
          { path: 'alliance', component: AllianceComponent },
          { path: 'staff', component: StaffComponent },
          { path: 'shop', component: ShopComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CosmosRoutingModule {}
