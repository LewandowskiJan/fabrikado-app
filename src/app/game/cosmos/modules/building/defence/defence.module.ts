import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@src/app/shared/layout/layout.module';

import { DefenceDetailsComponent } from './components/defence-details/defence-details.component';
import { DefenceComponent } from './containers/defence/defence.component';
@NgModule({
  declarations: [DefenceComponent, DefenceDetailsComponent],
  exports: [DefenceDetailsComponent],
  imports: [CommonModule, LayoutModule],
})
export class DefenceModule {}
