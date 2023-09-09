import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsContainerRoutingModule } from './products-container-routing.module';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DetailsComponent,
    ItemComponent,
    ProductsListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductsContainerRoutingModule, SharedModule
  ],
  exports: [
    DetailsComponent,
    ItemComponent,
    ProductsListComponent,
    CartComponent
  ]
})
export class ProductsContainerModule { }
