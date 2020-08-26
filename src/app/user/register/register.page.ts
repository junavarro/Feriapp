import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  
  private userType: string;
  private registrationForm : FormGroup;
  private showPassword: boolean;
  private showPasswordRepetition: boolean;
  private passwordToggleIcon: string;
  private repeatPasswordToggleIcon: string;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userType = params['user'];
      this.showPassword = false;
      this.showPasswordRepetition = false;
      this.passwordToggleIcon = "eye-sharp";
      this.repeatPasswordToggleIcon = "eye-sharp";
    });

    this.registrationForm = this.formBuilder.group({
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
        Validators.minLength(8),
        Validators.maxLength(8)
      ])),
      telegram: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8)
      ])),
      sinpe: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8)
      ])),
    });
  }

  registerUser() {
    let userInfo = this.registrationForm.value;
    let newUser = new User (userInfo.name,userInfo.cedula,userInfo.phone,userInfo.ubicacion,userInfo.correo,userInfo.contraseña,userInfo.whatsapp,userInfo.telegram,userInfo.sinpe);
    //use service to store user data
    console.log(newUser);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.passwordToggleIcon=="eye-sharp" ? "eye-off-sharp" : "eye-sharp";
  }

  toggleRepeatPassword() {
    this.showPasswordRepetition = !this.showPasswordRepetition;
    this.repeatPasswordToggleIcon = this.repeatPasswordToggleIcon=="eye-sharp" ? "eye-off-sharp" : "eye-sharp";
  }
}