import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameInfoPageComponent } from './containers/game-info-page/game-info-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LogoutPageComponent } from './containers/logout-page/logout-page.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent,
    data: { animation: 'Login' },
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    data: { animation: 'Register' },
  },
  {
    path: 'info',
    component: GameInfoPageComponent,
    data: { animation: 'Logout' },
  },
  {
    path: 'logout',
    component: LogoutPageComponent,
    data: { animation: 'Logout' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
