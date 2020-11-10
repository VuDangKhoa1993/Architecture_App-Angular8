import { Directive, HostBinding, EventEmitter, Input, OnDestroy, OnInit, Output, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { interval, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[appBackgroundAnimation]',
})
export class BackgroundAnimateDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line:variable-name
  private _images: string[] = [];
  private destroy = new Subject();
  public timer: number;
  constructor(
    private sanitization: DomSanitizer
  ) { }

  @Input() set bgImages(imgs: string[]) {
    if (imgs.length > 0) {
      this._images = imgs;
    }
  }
  @Output() enterEventHandler = new EventEmitter();
  public index = 0;

  @HostBinding('style.background-image') bgImage;
  @HostListener('document:keyup', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.enterEventHandler.emit();
    }
  }

  public ngOnInit() {
    interval(3000).pipe(
      tap(() => {
      this.bgImage = this.sanitization.bypassSecurityTrustStyle(this._images[this.index]);
      if (this.index < this._images.length) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    takeUntil(this.destroy)
    )).subscribe((timer) => this.timer = timer);
  }

  public ngOnDestroy() {
    clearInterval(this.timer);
    this.destroy.next(true);
    this.destroy.complete();
  }
}
