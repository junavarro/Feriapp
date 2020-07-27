import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProductComponent, AddProductFormResult } from '../components/add-product/add-product.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {

  products = [];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async presentAddProductModal() {
    const modal = await this.modalController.create({
      component: AddProductComponent,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then((dismissed) => {
      if (dismissed.role == 'add')
      {
        this.products.push(dismissed.data);
      }
    });
    return await modal.present();
  }

}
