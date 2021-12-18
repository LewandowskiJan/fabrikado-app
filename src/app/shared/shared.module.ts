import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDisplayPipe } from './number-display.pipe';



@NgModule({
  declarations: [
    NumberDisplayPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
