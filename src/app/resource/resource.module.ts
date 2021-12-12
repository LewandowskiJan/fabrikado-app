import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResourceComponent } from './containers/resource/resource.component';

@NgModule({
  declarations: [ResourceComponent],
  exports: [ResourceComponent],
  imports: [CommonModule],
})
export class ResourceModule {}
