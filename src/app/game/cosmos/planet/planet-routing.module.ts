import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MineComponent } from '../modules/building/mine/container/mine/mine.component';
import { FleetComponent } from '../modules/fleet/containers/fleet/fleet.component';
import { ShipyardComponent } from '../modules/shipyard/containers/shipyard/shipyard.component';
import { TechnologyComponent } from '../modules/technology/containers/technology/technology.component';
import { PlanetResolver } from '../services/resolvers/planet.resolver';
import { AllianceComponent } from './components/alliance/alliance.component';
import { DefenceComponent } from './components/defence/defence.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { MarketComponent } from './components/market/market.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PlanetRedirectComponent } from './components/planet-redirect/planet-redirect.component';
import { ShopComponent } from './components/shop/shop.component';
import { StaffComponent } from './components/staff/staff.component';
import { PlanetComponent } from './containers/planet/planet.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetRedirectComponent,
  },
  {
    path: ':id',
    component: PlanetComponent,
    data: { animation: '1' },
    resolve: {
      planet: PlanetResolver,
    },
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: OverviewComponent,
        data: { animation: 'Overview' },
      },
      {
        path: 'buildings',
        component: MineComponent,
        data: { animation: 'Buildings' },
      },
      {
        path: 'market',
        component: MarketComponent,
        data: { animation: 'Market' },
      },
      {
        path: 'research',
        component: TechnologyComponent,
        data: { animation: 'Research' },
      },
      {
        path: 'shipyard',
        component: ShipyardComponent,
        data: { animation: 'Shipyard' },
      },
      {
        path: 'defence',
        component: DefenceComponent,
        data: { animation: 'Defence' },
      },
      {
        path: 'fleet',
        component: FleetComponent,
        data: { animation: 'Fleet' },
      },
      {
        path: 'galaxy',
        component: GalaxyComponent,
        data: { animation: 'Galaxy' },
      },
      {
        path: 'alliance',
        component: AllianceComponent,
        data: { animation: 'Alliance' },
      },
      {
        path: 'staff',
        component: StaffComponent,
        data: { animation: 'Staff' },
      },
      {
        path: 'shop',
        component: ShopComponent,
        data: { animation: 'Shop' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetRoutingModule {}
