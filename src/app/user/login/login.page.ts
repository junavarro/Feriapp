import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalComponent } from '../register/components/modal/modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@NgModule ({
  imports: [ModalComponent],
})

export class LoginPage implements OnInit {
  private loginForm : FormGroup;
  private passwordForm : FormGroup;
  private requestPassword : Boolean;

  constructor(private loginFormBuilder: FormBuilder,private passwordFormBuilder: FormBuilder, private modalController: ModalController) {
    this.requestPassword = false;
  }

  ngOnInit() {
    this.loginForm = this.loginFormBuilder.group({
      phone:  new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)])),
    });

    this.passwordForm = this.passwordFormBuilder.group({
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ]))
    });
  }

  checkPhoneNumber() {
    console.log(this.loginForm.value);
    this.requestPassword = true;
  }

  logUser() {
    console.log(this.passwordForm.value);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

}
