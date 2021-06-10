import { User, Role } from '@app/shared/common';
import { Component, OnInit, ElementRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('currentUser') currentUser: User;
  @Output() logout = new EventEmitter<any>();
  @ViewChild('sidenav', { static: true }) sidenav: any;
  admin = Role.Admin;
  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.sidenav.toggle();
  }

}
