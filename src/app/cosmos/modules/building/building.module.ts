import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefenceModule } from './defence/defence.module';
import { MineModule } from './mine/mine.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MineModule, DefenceModule],
  exports: [MineModule],
})
export class BuildingModule {}
