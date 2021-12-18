import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NumberDisplayPipe } from './../../../shared/pipes/number-display/number-display.pipe';
import { ResourcesComponent } from './containers/resources/resources.component';

@NgModule({
  declarations: [ResourcesComponent, NumberDisplayPipe],
  exports: [ResourcesComponent],
  imports: [CommonModule],
})
export class ResourcesModule {}
