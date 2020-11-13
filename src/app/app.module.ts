import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/app/app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpreadSheetsModule } from './component/spread-sheets-angular/gc.spread.sheets.angular';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    SpreadSheetsModule,
  ],
  exports: [
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
