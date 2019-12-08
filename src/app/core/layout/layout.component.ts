import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User, AuthenticationService, Role } from '@app/shared/common';
import { Router } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  currentUser$: Observable<User>;
  @ViewChild('sidebar') sidebar: SidenavComponent;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser$ = this.authenticationService.currentUser$;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  toggleSideBar() {
    this.sidebar.toggleSideNav();
  }

}
