import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-welcome-fitness',
  templateUrl: './welcome-fitness.component.html',
  styleUrls: ['./welcome-fitness.component.scss']
})
export class WelcomeFitnessComponent implements OnInit {
  public backgroundImages: string[] = [
    `
    linear-gradient(rgba(32, 32, 32, 0.4), rgba(49, 48, 48, 0.8)),
      url('https://images.hdqwalls.com/download/fitness-gym-girl-nb-1920x1080.jpg')`,
    `
    linear-gradient(rgba(32, 32, 32, 0.4), rgba(49, 48, 48, 0.8)),
      url('https://images7.alphacoders.com/692/thumb-1920-692042.jpg')
    `,
    `
    linear-gradient(rgba(32, 32, 32, 0.4), rgba(49, 48, 48, 0.8)),
      url('https://cdn.wallpapersafari.com/63/30/0eVMPo.jpg')
    `,
    `
    linear-gradient(rgba(32, 32, 32, 0.4), rgba(49, 48, 48, 0.8)),
      url(' https://eskipaper.com/images/gym-wallpaper-3.jpg')
    `
  ];
  constructor() { }

  ngOnInit() {
  }

}
