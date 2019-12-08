import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login';
import { SidenavComponent, LayoutComponent } from './layout';
import { RegisterComponent } from './register';
import { SharedModule } from '@app/shared/shared.module';
import { AppComponent } from './app/app.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    SidenavComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent,
    ToolbarComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    AppComponent
  ]
})
export class CoreModule { }
