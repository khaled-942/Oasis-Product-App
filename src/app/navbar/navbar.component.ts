import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  counter!: number
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.CartService.cartLengthObserv.subscribe((data) => this.counter = data)
    console.log(this.counter)
  }

}
