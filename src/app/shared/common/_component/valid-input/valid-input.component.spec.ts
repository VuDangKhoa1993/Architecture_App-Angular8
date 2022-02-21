import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValidInputComponent } from './valid-input.component';

describe('ValidInputComponent', () => {
  let component: ValidInputComponent;
  let fixture: ComponentFixture<ValidInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
