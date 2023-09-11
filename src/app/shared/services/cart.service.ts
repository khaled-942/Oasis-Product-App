import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemlist: any = [];
  checkItem: any;
  private productQuantity = new BehaviorSubject([]);
  productQuantityObserv = this.productQuantity.asObservable();
  private cartLength = new BehaviorSubject(0);
  cartLengthObserv = this.cartLength.asObservable();

  constructor() {}
  addtoCart(product: any) {
    this.checkItem = this.cartItemlist.findIndex(
      (obj: any) => obj.id == product.id
    );
    // to add quantity and total in the api
    product = {
      quantity: 1,
      total: product.price,
      ...product
    };
    if (this.checkItem == -1) {
      this.cartItemlist.push(product);
    } else {
      this.cartItemlist[this.checkItem].quantity += 1;
      this.cartItemlist[this.checkItem].total =
        this.cartItemlist[this.checkItem].quantity *
        this.cartItemlist[this.checkItem].price;
    }

    this.productQuantity.next(this.cartItemlist);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemlist.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemlist.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemlist.splice(index, 1);
      }
    });
    this.productQuantity.next(this.cartItemlist);
  }

  removeAllCart() {
    this.cartItemlist = [];
    this.productQuantity.next(this.cartItemlist);
  }

  increaseItem(id: any) {
    this.checkItem = this.cartItemlist.findIndex((obj: any) => obj.id == id);
    this.cartItemlist[this.checkItem].quantity += 1;
    this.cartItemlist[this.checkItem].total =
      this.cartItemlist[this.checkItem].quantity *
      this.cartItemlist[this.checkItem].price;
    this.getTotalPrice();
    this.productQuantity.next(this.cartItemlist);
  }

  decreaseItem(id: any) {
    this.checkItem = this.cartItemlist.findIndex((obj: any) => obj.id == id);
    if (this.cartItemlist[this.checkItem].quantity == 1) {
      this.removeCartItem(this.cartItemlist[this.checkItem]);
    } else {
      this.cartItemlist[this.checkItem].quantity -= 1;
      this.cartItemlist[this.checkItem].total =
        this.cartItemlist[this.checkItem].quantity *
        this.cartItemlist[this.checkItem].price;
    }
    this.getTotalPrice();
    this.productQuantity.next(this.cartItemlist);
  }
  setCartLengthVal(num:number){
    this.cartLength.next(num);
  }
}
