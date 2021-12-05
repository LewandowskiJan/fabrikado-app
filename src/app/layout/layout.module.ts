import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { PlanetButtonComponent } from './components/planet-button/planet-button.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { PlanetContainerComponent } from './containers/planet-container/planet-container.component';

@NgModule({
  declarations: [
    PlanetContainerComponent,
    ButtonComponent,
    DashboardComponent,
    PlanetButtonComponent,
    LayoutComponent,
    MenuButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    PlanetContainerComponent,
    ButtonComponent,
    DashboardComponent,
    PlanetButtonComponent,
    LayoutComponent,
    MenuButtonComponent,
  ],
})
export class LayoutModule {}
