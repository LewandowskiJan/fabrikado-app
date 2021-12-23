import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormSubmitComponent } from './components/form-submit/form-submit.component';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [InputFieldComponent, FormSubmitComponent],
  exports: [InputFieldComponent, FormSubmitComponent],
  imports: [CommonModule],
})
export class FormsUiModule {}
