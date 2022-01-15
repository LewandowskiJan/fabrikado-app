import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { DiodeComponent } from './components/diode/diode.component';
import { ImageComponent } from './components/image/image.component';
import { MarketElementComponent } from './components/market-element/market-element.component';
import { MarketElementDetailsComponent } from './components/market-element-details/market-element-details.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { PlanetButtonComponent } from './components/planet-button/planet-button.component';
import { StructureComponent } from './components/structure/structure.component';
import { StructureDetailsComponent } from './components/structure-details/structure-details.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { GameLayoutComponent } from './containers/game-layout/game-layout.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { MarketContainerComponent } from './containers/market-container/market-container.component';
import { PlanetContainerComponent } from './containers/planet-container/planet-container.component';
import { ResourcesModule } from './modules/resources/resources.module';

@NgModule({
  declarations: [
    PlanetContainerComponent,
    ButtonComponent,
    DashboardComponent,
    PlanetButtonComponent,
    LayoutComponent,
    MenuButtonComponent,
    StructureComponent,
    StructureDetailsComponent,
    ImageComponent,
    MarketContainerComponent,
    MarketElementComponent,
    MarketElementDetailsComponent,
    DiodeComponent,
    GameLayoutComponent,
  ],
  imports: [CommonModule, ResourcesModule],
  exports: [
    ResourcesModule,
    PlanetContainerComponent,
    ButtonComponent,
    DashboardComponent,
    PlanetButtonComponent,
    LayoutComponent,
    MenuButtonComponent,
    StructureComponent,
    StructureDetailsComponent,
    ImageComponent,
    MarketContainerComponent,
    MarketElementComponent,
    MarketElementDetailsComponent,
    DiodeComponent,
    GameLayoutComponent,
  ],
})
export class LayoutModule {}
