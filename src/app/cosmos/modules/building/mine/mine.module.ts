import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from './../../../../layout/layout.module';
import { MineDetailComponent } from './components/mine-detail/mine-detail.component';
import { MineThumbnailComponent } from './components/mine-thumbnail/mine-thumbnail.component';
import { MineComponent } from './container/mine/mine.component';
import { MineService } from './services/mine.service';

@NgModule({
  declarations: [MineComponent, MineDetailComponent, MineThumbnailComponent],
  exports: [MineComponent],
  imports: [CommonModule, LayoutModule],
  providers: [MineService],
})
export class MineModule {}
