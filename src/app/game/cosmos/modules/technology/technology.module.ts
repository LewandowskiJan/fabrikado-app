import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@src/app/shared/layout/layout.module';

import { TechnologyDetailsComponent } from './components/technology-details/technology-details.component';
import { TechnologyComponent } from './containers/technology/technology.component';

@NgModule({
  declarations: [TechnologyComponent, TechnologyDetailsComponent],
  exports: [TechnologyComponent],
  imports: [CommonModule, LayoutModule],
})
export class TechnologyModule {}
