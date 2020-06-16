import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductItemComponent

    ],
    imports: [
        IonicModule,
        CommonModule,
    ],
    exports: [ProductListComponent, ProductItemComponent]
})
export class ComponentsModule { }