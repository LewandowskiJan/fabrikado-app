import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@src/app/shared/layout/layout.module';

import { MineDetailComponent } from './components/mine-detail/mine-detail.component';
import { MineThumbnailComponent } from './components/mine-thumbnail/mine-thumbnail.component';
import { MineComponent } from './container/mine/mine.component';

@NgModule({
  declarations: [MineComponent, MineDetailComponent, MineThumbnailComponent],
  exports: [MineComponent],
  imports: [CommonModule, LayoutModule],
})
export class MineModule {}
