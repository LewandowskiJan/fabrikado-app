import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@src/app/shared/layout/layout.module';

import { CosmosComponent } from './containers/cosmos/cosmos.component';
import { CosmosStartPageComponent } from './containers/cosmos-start-page/cosmos-start-page.component';
import { CosmosRoutingModule } from './cosmos-routing.module';

@NgModule({
  declarations: [CosmosComponent, CosmosStartPageComponent],
  imports: [CommonModule, CosmosRoutingModule, LayoutModule],
})
export class CosmosModule {}
