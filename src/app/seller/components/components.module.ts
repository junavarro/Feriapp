import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductItemComponent,
        AddProductComponent,


    ],
    imports: [
        IonicModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [ProductListComponent, ProductItemComponent, AddProductComponent]
})
export class ComponentsModule { }