import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productList: any
  constructor(private route: Router, private productsServiece: ProductsService) { }

  reciveItemDate(productItem: any) {
    console.log('from Parent', productItem);
    this.route.navigate([`store/item/${productItem.id}`])
  }
  ngOnInit(): void {
    this.productsServiece.getProducts().subscribe((data) => { this.productList = data });
  }
  getAll() {
    this.productsServiece.getProducts().subscribe((data) => { this.productList = data });
  }
  filter(categore: string) {
    if (categore === 'men') {
      categore = "men's clothing"
    } else if (categore === 'women') {
      categore = "women's clothing"
    }
    this.productsServiece.filterByCategories(categore).subscribe((data) => { this.productList = data });

  }
}