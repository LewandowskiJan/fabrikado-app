import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingsComponent } from './components/buildings/buildings.component';
import { MarketComponent } from './components/market/market.component';
import { OverviewComponent } from './components/overview/overview.component';
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
          { path: 'research', component: MarketComponent },
          { path: 'shipyard', component: MarketComponent },
          { path: 'defence', component: MarketComponent },
          { path: 'fleet', component: MarketComponent },
          { path: 'galaxy', component: MarketComponent },
          { path: 'alliance', component: MarketComponent },
          { path: 'staff', component: MarketComponent },
          { path: 'shop', component: MarketComponent },
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
