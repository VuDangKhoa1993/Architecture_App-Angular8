import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SliderShowComponent } from './slider-show.component';

@NgModule({
  declarations: [SliderShowComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SliderShowComponent
  ]
})
export class SliderShowModule {}
