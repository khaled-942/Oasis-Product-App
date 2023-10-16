import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/interfaces';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartRow!: Product;
  quantityCount!: number;
  constructor(private cartServices: CartService) {}

  ngOnInit(): void {
    this.cartServices.cartLengthObserv.subscribe((data) => {
      this.quantityCount = data;
    });
  }
  removeItem(item: Product) {
    this.cartServices.removeCartItem(item);
    this.cartServices.setCartLengthVal((this.quantityCount -= item.quantity));
  }
  minus(id: number) {
    this.cartServices.decreaseItem(id);
    this.cartServices.setCartLengthVal(--this.quantityCount);
  }
  plus(id: number) {
    this.cartServices.increaseItem(id);
    this.cartServices.setCartLengthVal(++this.quantityCount);
  }
}
