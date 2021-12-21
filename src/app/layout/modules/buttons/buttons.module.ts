import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LinkButtonComponent } from './components/link-button/link-button.component';

@NgModule({
  declarations: [LinkButtonComponent],
  exports: [LinkButtonComponent],
  imports: [CommonModule],
})
export class ButtonsModule {}
