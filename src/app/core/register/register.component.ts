import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();

    this.test();
  }

  test() {
    // tslint:disable-next-line:one-variable-per-declaration
    let obsValue, promiseValue;
    // from([1, 2, 3, 4]).pipe(map(val => val * 2)).subscribe(val => obsValue = val);
    interval(1000).pipe(map(val => val * 2)).subscribe(val => {
      obsValue = val;
      console.log('observable run');
    });
    Promise.resolve([1, 2, 3, 4]).then(arr => {
      arr.forEach(value => promiseValue = value * 2);
      console.log('promise run');
    });
    console.log(obsValue, promiseValue);
    setTimeout(() => {
      console.log(obsValue, promiseValue);
    }, 0);


    // output
    /*
      undefined undefined
      promise run
      undefined, 8,
      observable run,
      observable run
      observable run
      observable run
    */

  }

  private initForm() {
    this.registerForm = new FormGroup({
      usename: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  public onSubmit(formValue) {
    console.log(formValue);
  }
}
