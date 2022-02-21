import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './shared/common';
import { WelcomeComponent } from './core/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
   },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'web',
    component: LayoutComponent,
    loadChildren: () => import('./web/web.module').then(m => m.WebModule),
    data: { preload: true },
  },
  {
    path: '**',
    redirectTo: '/web/welcome-fitness'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: []
})
export class AppRoutingModule { }
