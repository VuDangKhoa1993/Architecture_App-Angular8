import { AfterViewInit, QueryList, Component, OnInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { SlideShowDirective } from '@app/shared/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line:variable-name
  public _imageRefs = [];
  @ViewChildren('image') imageRefs: QueryList<ElementRef[]>;
  @ViewChild(SlideShowDirective) sliderShowDirective: SlideShowDirective;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
     this._imageRefs = this.imageRefs.toArray();
    }, 0);
  }

  plusImage(index) {
    this.sliderShowDirective.plusImage(index);
  }

}
