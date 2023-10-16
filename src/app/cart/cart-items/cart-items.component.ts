import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/interfaces';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  public products!: Product[];
  public grandTotal!: number;
  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.cartService.productQuantityObserv.subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  emptycart() {
    this.cartService.removeAllCart();
    this.cartService.setCartLengthVal(0);
  }
  goTo(str:string) {
    this.route.navigate([str]);
  }
}
