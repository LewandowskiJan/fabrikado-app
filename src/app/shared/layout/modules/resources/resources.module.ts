import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NumberDisplayPipe } from '@src/app/shared/pipes/number-display/number-display.pipe';
import { SharedModule } from '@src/app/shared/shared.module';

import { LoaderComponent } from '../../components/loader/loader.component';
import { ResourceElementComponent } from './components/resource-element/resource-element.component';
import { ResourcesComponent } from './containers/resources/resources.component';

@NgModule({
  declarations: [ResourcesComponent, ResourceElementComponent, LoaderComponent],
  exports: [ResourcesComponent],
  providers: [NumberDisplayPipe],
  imports: [CommonModule, SharedModule],
})
export class ResourcesModule {}
