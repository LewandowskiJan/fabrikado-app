import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingsComponent } from './components/buildings/buildings.component';
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
