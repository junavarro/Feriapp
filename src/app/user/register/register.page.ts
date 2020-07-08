import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  
  private userType: string;
  private sellerRegistrationForm : FormGroup;
  private buyerRegistrationForm : FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userType = params['user'];
    });

    if (this.userType=='seller') { 
      this.sellerRegistrationForm = this.formBuilder.group({
        phone:  new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/)])),
      });
    }

    else {
      this.buyerRegistrationForm = this.formBuilder.group({});
    }
  }

  registerSeller() {
    console.log(this.sellerRegistrationForm.value)
  }

  registerBuyer() {
    console.log(this.buyerRegistrationForm.value)
  }
}