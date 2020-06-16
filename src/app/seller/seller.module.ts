import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    IonicModule,
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
