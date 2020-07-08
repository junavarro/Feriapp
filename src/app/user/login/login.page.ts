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

  constructor( private formBuilder: FormBuilder, private modalController: ModalController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phone:  new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)])),
    });
  }

  logUser() {
    console.log(this.loginForm.value);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

}
