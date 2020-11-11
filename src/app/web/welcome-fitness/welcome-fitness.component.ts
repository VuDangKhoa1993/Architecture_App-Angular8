import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-welcome-fitness',
  templateUrl: './welcome-fitness.component.html',
  styleUrls: ['./welcome-fitness.component.scss']
})
export class WelcomeFitnessComponent implements OnInit {
  control = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
