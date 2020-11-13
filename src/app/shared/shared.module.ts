import { NgModule } from '@angular/core';
import {
  AlertComponent,
  ErrorInterceptor,
  JWTInterceptor,
  fakeBackendProvider,
  PasswordMatchingValidatorDirective,
  SlideShowDirective,
} from './common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
} from '@angular/material';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RoundBlockDirective } from './common/_directive/round-block.directive';
import { RatingInputComponent } from './common/_component/rating-input/rating-input.component';
import { AnimateDirective } from './common/_directive/animate.directive';
import { ScrollToViewDirective } from './common/_directive/scroll-to-view.directive';
import { ValidInputComponent } from './common/_component/valid-input/valid-input.component';
import { BackgroundAnimateDirective } from './common/_directive/background-animation.directive';
import { TextareaExpandComponent } from './common/_component/textarea-expand/textarea-expand.component';
import { SliderShowComponent } from './common/_module/slider-show/slider-show.component';
import { SliderShowModule } from './common/_module/slider-show/slider-show.module';

const MaterialModules = [
  MatSliderModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
];

const components = [
  AlertComponent,
  RatingInputComponent,
  ValidInputComponent,
  TextareaExpandComponent
];

const directives = [
  RoundBlockDirective,
  AnimateDirective,
  ScrollToViewDirective,
  PasswordMatchingValidatorDirective,
  BackgroundAnimateDirective,
  SlideShowDirective
];

const AngularModules = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  SpreadSheetsModule,
  DragDropModule
];

const ManualModule = [
  SliderShowModule
];


@NgModule({
  declarations: [
    ...directives,
    ...components
  ],
  imports: [
    CommonModule,
    ...AngularModules,
    ...MaterialModules,
    ...ManualModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
    fakeBackendProvider,
  ],
  exports: [
    ...AngularModules,
    ...components,
    ...MaterialModules,
    ...directives,
    ...ManualModule
  ],
})
export class SharedModule {}
