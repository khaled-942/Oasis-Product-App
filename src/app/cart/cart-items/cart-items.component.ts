import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.cartService.productQuantityObserv.subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
  minus(id: any) {
    this.cartService.decreaseItem(id);
  }
  plus(id: any) {
    this.cartService.increaseItem(id);
  }
  Checkout() {
    this.route.navigate(['cart/checkout'])
  }
}
