import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() productItem: any;
  @Output() sendItem = new EventEmitter();
  quantityCount!: number;
  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {}
  showDetails() {
    // console.log('from child', this.productItem);
    this.sendItem.emit(this.productItem);
  }
  quantity() {
    // this.ProductQuantitytService.addtoCart(++this.quantityCount);
    console.log(this.productItem);
  }
  addToCart(item:any) {
    this.cartService.addtoCart(item)
  }
}
