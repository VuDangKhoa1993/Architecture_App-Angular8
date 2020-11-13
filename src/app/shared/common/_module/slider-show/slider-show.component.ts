import {
  Component,
  QueryList,
  ElementRef,
  Renderer2,
  ContentChildren,
  AfterContentInit,
  ContentChild,
  OnDestroy,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-slider-show',
  templateUrl: './slider-show.component.html',
  styleUrls: ['./slider-show.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderShowComponent implements AfterContentInit, OnDestroy {
  // tslint:disable-next-line:variable-name
  private _imageRefs: any[];
  private sliderIndex: number;
  private destroy$ = new Subject<boolean>();
  @ContentChildren('sliderImg') imageRefs: QueryList<ElementRef[]>;
  @ContentChild('btnArrowLeft') btnArrowLeft: ElementRef;
  @ContentChild('btnArrowRight') btnArrowRight: ElementRef;
  @Input() numberOfImages: number;
  constructor(private renderer2: Renderer2) {}

  public ngAfterContentInit() {
    this._imageRefs = this.imageRefs.toArray();
    this.sliderIndex = 1;
    this.showImage(this.sliderIndex);
    this.addEventHandler();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private addEventHandler() {
    fromEvent(this.btnArrowLeft.nativeElement, 'click')
      .pipe(takeUntil(this.destroy$))
      .subscribe((_) => this.plusImage(-1));

    fromEvent(this.btnArrowRight.nativeElement, 'click')
      .pipe(takeUntil(this.destroy$))
      .subscribe((_) => this.plusImage(1));
  }

  private showImage(index) {
    if (index > this._imageRefs.length) {
      this.sliderIndex = 1;
    }
    if (index < 1) {
      this.sliderIndex = this._imageRefs.length;
    }
    this._imageRefs.forEach((imageRef: ElementRef) => {
      this.renderer2.setStyle(imageRef.nativeElement, 'display', 'none');
      this.renderer2.removeClass(imageRef.nativeElement, 'active');
    });
    this.renderer2.setStyle(
      this._imageRefs[this.sliderIndex - 1].nativeElement,
      'display',
      'inline-block'
    );
    this.renderer2.addClass(
      this._imageRefs[this.sliderIndex - 1].nativeElement,
      'active'
    );
  }

  public plusImage(index) {
    this.sliderIndex += index;
    this.showImage(this.sliderIndex);
  }
}
