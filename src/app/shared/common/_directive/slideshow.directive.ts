import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appSlideShow]',
})
export class SlideShowDirective implements OnChanges {
  // tslint:disable-next-line:variable-name
  public _imageRefs: ElementRef[] = [];
  public slideIndex: number;
  @Input() set imageRefs(values: ElementRef[]) {
    if (values && values.length > 0) {
      this._imageRefs = values;
    }
  }

  constructor(private renderer2: Renderer2) { }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.imageRefs && changes.imageRefs.currentValue.length) {
        this.slideIndex = 1;
        this.show(this.slideIndex);
    }
  }

  public show(index) {
    // last image
    if (index > this._imageRefs.length) {
      this.slideIndex = index = 1;
    }
    // first image
    if (index < 1) {
      this.slideIndex = index = this._imageRefs.length;
    }
    this._imageRefs.forEach((imageRef: ElementRef) => {
      this.renderer2.setStyle(imageRef.nativeElement, 'display', 'none');
      this.renderer2.removeClass(imageRef.nativeElement, 'activeImage');
    });

    if (this._imageRefs.length > 0) {
      this.renderer2.setStyle(this._imageRefs[index - 1].nativeElement, 'display', 'block');
      this.renderer2.addClass(this._imageRefs[index - 1].nativeElement, 'activeImage');
    }
  }

  public plusImage(index) {
    this.slideIndex += index;
    this.show(this.slideIndex);
  }
}
