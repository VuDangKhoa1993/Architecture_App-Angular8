import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaExpandComponent } from './textarea-expand.component';

describe('TextareaExpandComponent', () => {
  let component: TextareaExpandComponent;
  let fixture: ComponentFixture<TextareaExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
