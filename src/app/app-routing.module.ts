import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from './services/guards/user.guard';
import { WelcomePageComponent } from './unauthorized/landing-page/containers/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
    loadChildren: () =>
      import('./unauthorized/landing-page/landing-page.module').then(
        (m: any) => m.LandingPageModule
      ),
    data: { animation: 'WelcomePage' },
  },
  {
    path: 'cosmos',
    canLoad: [UserGuard],
    loadChildren: () =>
      import('./game/cosmos/cosmos.module').then((m: any) => m.CosmosModule),
    data: { animation: 'CosmosPage' },
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
