import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WelcomeFitnessComponent } from './welcome-fitness.component';

describe('WelcomeFitnessComponent', () => {
  let component: WelcomeFitnessComponent;
  let fixture: ComponentFixture<WelcomeFitnessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeFitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
