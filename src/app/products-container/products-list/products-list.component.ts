import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productList:any
  constructor(private route: Router,private productsServiece:ProductsService ) { }
  
  reciveItemDate(productItem: any) {
    console.log('from Parent', productItem);
    this.route.navigate([`store/item/${productItem.id}`])
  }
  ngOnInit(): void {
    this.productsServiece.getProducts().subscribe((data)=>{this.productList = data});
  }
}
