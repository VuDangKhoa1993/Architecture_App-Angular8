import { NgModule } from '@angular/core';
import { AlertComponent, ErrorInterceptor, JWTInterceptor, fakeBackendProvider } from './common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RoundBlockDirective } from './common/_directive/round-block.directive';
import { RatingInputComponent } from './common/_component/rating-input/rating-input.component';


@NgModule({
  declarations: [
    AlertComponent,
    RoundBlockDirective,
    RatingInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    SpreadSheetsModule,
    DragDropModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
    fakeBackendProvider
  ],
  exports: [
    AlertComponent,
    RatingInputComponent,
    FormsModule,
    HttpClientModule,
    RoundBlockDirective,
    SpreadSheetsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    DragDropModule,
    MatCardModule
  ]
})
export class SharedModule { }
