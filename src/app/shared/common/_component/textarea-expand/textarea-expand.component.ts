import { Component, ElementRef, forwardRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea-expand',
  templateUrl: './textarea-expand.component.html',
  styleUrls: ['./textarea-expand.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaExpandComponent),
      multi: true
    }
  ]
})
export class TextareaExpandComponent implements ControlValueAccessor {
  // @ViewChild('textarea', { read: true }) textarea: ElementRef<HTMLAreaElement>;
  @ViewChild('textarea', { static: true }) textarea;

  constructor(
    private renderer2: Renderer2
  ) { }

  // this method is called when instantiate a new control and whenever you call setValue/patchValue
  public writeValue(value: any): void {
    const div = this.textarea.nativeElement;
    this.renderer2.setProperty(div, 'textContent', value);
  }

  // this method is called when the control receives a change event.
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // this method is called when the control receives a touched event.
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // this method is called when the control state changes to or from DISABLED.
  public setDisabledState?(isDisabled: boolean): void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer2[action](div, 'disabled');
  }

  public onChange(value) {
    console.log(value);
  }

  public onTouched(value) {
    console.log(value);
  }

  public change($event) {
    this.onChange($event.target.textContent);
  }
}
