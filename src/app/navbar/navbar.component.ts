import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { SearchService } from '../shared/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  counter!: number
  constructor(private CartService: CartService, private searchText:SearchService, private route:Router) { }

  ngOnInit(): void {
    this.CartService.cartLengthObserv.subscribe((data) => this.counter = data);
  }
  applySearch(val:any){
    this.searchText.setSearchText(val.target.value);
    this.route.navigate(['/store/search'])
  }
}
