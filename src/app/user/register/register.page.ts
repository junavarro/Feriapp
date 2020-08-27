import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup, ValidationErrors } from '@angular/forms';
import { User } from '../user';
import { ToastController } from '@ionic/angular';

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

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private toastController: ToastController) { }

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
        Validators.min(100000000),
        Validators.max(999999999)
      ])),
      phone:  new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999)
      ])),
      ubicacion: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      correo: new FormControl('', Validators.compose([
        Validators.email
      ])),
      whatsapp: new FormControl('', Validators.compose([
        Validators.min(10000000),
        Validators.max(99999999)
      ])),
      telegram: new FormControl('', Validators.compose([
        Validators.min(10000000),
        Validators.max(99999999)
      ])),
      sinpe: new FormControl('', Validators.compose([
        Validators.min(10000000),
        Validators.max(99999999)
      ])),
    });
  }

  registerUser() {
    let userInfo = this.registrationForm.value;
    let newUser = new User (userInfo.name,userInfo.cedula,userInfo.phone,userInfo.ubicacion,userInfo.correo,userInfo.password,userInfo.whatsapp,userInfo.telegram,userInfo.sinpe);
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

  async presentToast(errorMessage: string) {
    const toast = await this.toastController.create({
      header: "Error en el formulario",
      message: errorMessage,
      position: "bottom",
      duration: 4000
    });
    toast.present();
  }

  checkInputValue(key: string) {
    this.registrationForm.get(key).markAsDirty();
    const controlErrors: ValidationErrors = this.registrationForm.get(key).errors;
    if (controlErrors != null) {
      Object.keys(controlErrors).forEach(keyError => {
        this.presentToast('Key control: '+key+', keyError: '+keyError);
        console.log('Key control: '+key+', keyError: '+keyError+', err value: ', controlErrors[keyError]);
      })
    } 
  }
}