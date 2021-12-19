import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from '../../components/loader/loader.component';
import { NumberDisplayPipe } from './../../../shared/pipes/number-display/number-display.pipe';
import { ResourceElementComponent } from './components/resource-element/resource-element.component';
import { ResourcesComponent } from './containers/resources/resources.component';

@NgModule({
  declarations: [
    ResourcesComponent,
    NumberDisplayPipe,
    ResourceElementComponent,
    LoaderComponent,
  ],
  exports: [ResourcesComponent],
  imports: [CommonModule],
})
export class ResourcesModule {}
