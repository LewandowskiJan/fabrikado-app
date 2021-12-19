import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CosmosComponent } from './containers/cosmos/cosmos.component';
import { CosmosStartPageComponent } from './containers/cosmos-start-page/cosmos-start-page.component';
import { PlanetGuard } from './guards/planet.guard';

const routes: Routes = [
  { path: '', component: CosmosStartPageComponent },
  {
    path: 'planets',
    component: CosmosComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./planet/planet.module').then((m: any) => m.PlanetModule),
        data: { animation: 'CosmosPage' },
        canLoad: [PlanetGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CosmosRoutingModule {}
