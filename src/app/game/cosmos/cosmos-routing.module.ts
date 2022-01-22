import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CosmosComponent } from './containers/cosmos/cosmos.component';
import { PlanetGuard } from './services/guards/planet.guard';

const routes: Routes = [
  {
    path: '',
    component: CosmosComponent,
    children: [
      {
        path: 'planets',
        loadChildren: () =>
          import('./planet/planet.module').then((m: any) => m.PlanetModule),
        data: { animation: 'CosmosPage' },
        canLoad: [PlanetGuard],
      },
      {
        path: 'map',
        loadChildren: () =>
          import('./modules/map/map.module').then((m: any) => m.MapModule),
        data: { animation: 'Overview' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CosmosRoutingModule {}
