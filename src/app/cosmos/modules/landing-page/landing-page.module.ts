import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@src/app/layout/layout.module';
import { ButtonsModule } from '@src/app/layout/modules/buttons/buttons.module';
import { FormsUiModule } from '@src/app/layout/modules/forms-ui/forms-ui.module';

import { GameInfoPageComponent } from './containers/game-info-page/game-info-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LogoutPageComponent } from './containers/logout-page/logout-page.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { WelcomePageComponent } from './containers/welcome-page/welcome-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageLayoutComponent } from './layout/landing-page-layout/landing-page-layout.component';

@NgModule({
  declarations: [
    WelcomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LandingPageLayoutComponent,
    LogoutPageComponent,
    GameInfoPageComponent,
  ],
  exports: [WelcomePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsUiModule,
    LandingPageRoutingModule,
    LayoutModule,
    ButtonsModule,
  ],
})
export class LandingPageModule {}
