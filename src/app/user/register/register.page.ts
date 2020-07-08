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
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z ]*$")
        ])),
        cedula: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
        ])),
        phone:  new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
        ])),
        ubicacion: new FormControl('', Validators.compose([
          Validators.required
        ])),
        contraseña: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])),
        repetirContraseña: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])),
        correo: new FormControl('', Validators.compose([
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
        ])),
        whatsapp: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ])),
        telegram: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ])),
        sinpe: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ])),
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