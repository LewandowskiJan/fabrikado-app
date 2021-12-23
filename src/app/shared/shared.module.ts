import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NumberDisplayPipe } from './pipes/number-display/number-display.pipe';

@NgModule({
  declarations: [NumberDisplayPipe],
  exports: [NumberDisplayPipe],
  imports: [CommonModule],
})
export class SharedModule {}
