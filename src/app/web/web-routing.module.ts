import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthGuard } from '@app/shared/common/_helper';
import { AdminComponent } from './admin';
import { Role } from '@app/shared/common/_model';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: {
          roles: Role.Admin
        },
        // loadChildren: '',
        // if admin module exist then canActivateChild will be run.
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
