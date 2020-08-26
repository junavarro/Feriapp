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
  private buyerImageBtn: string;
  private sellerImageBtn: string;

  constructor(private router: Router, private modalCtrl: ModalController) { 
    this.selectedUserType = "";
    this.isSellerSelected = false;
    this.isBuyerSelected = false;
    this.buyerImageBtn = "../assets/icon/buyer.svg";
    this.sellerImageBtn = "../assets/icon/seller.svg"
  }

  goToRegistrationPage(userType: string) {
    this.dismiss();
    this.router.navigate(['/register'], {queryParams: {user: userType}});
  }

  selectUserType(userType:string) {
    this.selectedUserType = userType;
    if (userType=="seller") {
           this.isSellerSelected = true;
           this.isBuyerSelected = false;
           this.buyerImageBtn = "../assets/icon/buyer.svg";
           this.sellerImageBtn = "../assets/icon/userType.svg";
    }
    else {
          this.isSellerSelected = false;
          this.isBuyerSelected = true;
          this.buyerImageBtn = "../assets/icon/userType.svg";
           this.sellerImageBtn = "../assets/icon/seller.svg";
    }
 }
 
 dismiss() {
  this.modalCtrl.dismiss({
    'dismissed': true
  });
}

}
