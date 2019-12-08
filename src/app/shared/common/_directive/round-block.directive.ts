import { Renderer2, ElementRef, Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appRoundBlock]'
})
export class RoundBlockDirective implements OnInit {
  @Input() appRoundBlock: string;
  constructor(
     private renderer2: Renderer2,
     private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border-radius', this.appRoundBlock);
    this.renderer2.addClass(this.elementRef.nativeElement, 'change-bg-color');
    this.renderer2.listen(this.elementRef.nativeElement, 'click', (event) => {
      this.elementRef.nativeElement.classList.toggle('change-bg-color');
    });
    // or
    // this.elementRef.nativeElement.addEventListener('click', function(event) {
    //   this.classList.toggle('change-bg-color');
    // });
  }

}
