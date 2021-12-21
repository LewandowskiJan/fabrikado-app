import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './cosmos/modules/landing-page/containers/welcome-page/welcome-page.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
    loadChildren: () =>
      import('./cosmos/modules/landing-page/landing-page.module').then(
        (m: any) => m.LandingPageModule
      ),
    data: { animation: 'WelcomePage' },
  },
  {
    path: 'cosmos',
    canLoad: [UserGuard],
    loadChildren: () =>
      import('./cosmos/cosmos.module').then((m: any) => m.CosmosModule),
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
