import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  private selectedUserType: string;
  private isSellerSelected: boolean;
  private isBuyerSelected: boolean;

  constructor(private router: Router, private modalCtrl: ModalController) { 
    selectedUserType: "";
    isSellerSelected: false;
    isBuyerSelected: false;
  }

  goToRegistrationPage(userType: string) {
    this.dismiss();
    this.router.navigate(['/register'], {queryParams: {user: userType}});
  }

  selectUserType(userType:string) {
    this.selectedUserType = userType;
    if (userType=="seller") {
           this.isSellerSelected=true;
           this.isBuyerSelected=false;
    }
    else {
          this.isSellerSelected=false;
          this.isBuyerSelected=true;
    }
 }
 dismiss() {
  this.modalCtrl.dismiss({
    'dismissed': true
  });
}

}
