import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { SharedModule } from '@app/shared/shared.module';
import { WebRoutingModule } from './web-routing.module';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    ContactComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WebRoutingModule,
  ],
  exports: [
    HomeComponent,
    AdminComponent,
    ContactComponent,
    DashboardComponent
  ]
})
export class WebModule { }
