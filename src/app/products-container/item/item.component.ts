import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/interfaces';
import { CartService } from 'src/app/shared/services/cart.service';
import { UserLoginService } from 'src/app/shared/services/user-login.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() productItem!: Product;
  @Output() sendItem = new EventEmitter();
  quantityCount!: number;
  authorized!:boolean;
  constructor(
    private cartService: CartService,
    private UserLoginServ: UserLoginService
  ) { }

  ngOnInit(): void {
    this.cartService.cartLengthObserv.subscribe((data) => {
      this.quantityCount = data
    })
    this.UserLoginServ.userLoginObserv.subscribe((data) => {
      this.authorized = data
    })
  }
  showDetails() {
    this.sendItem.emit(this.productItem);
  }
  addToCart(item: Product) {
    this.cartService.addtoCart(item);
    this.cartService.setCartLengthVal(++this.quantityCount)
  }
}
