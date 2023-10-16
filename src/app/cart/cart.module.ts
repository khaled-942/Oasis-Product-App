import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsContainerModule } from '../products-container/products-container.module';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  declarations: [
    CartItemsComponent,
    CheckoutComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ProductsContainerModule,
    SharedModule
  ],
  exports: [
    CartItemsComponent,
    CheckoutComponent,
    CartRoutingModule,
  ]
})
export class CartModule { }
