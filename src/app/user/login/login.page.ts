import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phone:  new FormControl('84921188', Validators.minLength(8)),
      password: new FormControl('capricornio', Validators.minLength(8)), 
    });
  }

  onSubmit(loginData) {
    this.loginForm.reset();
    console.warn('Your login has been submitted', loginData);
  }

}
