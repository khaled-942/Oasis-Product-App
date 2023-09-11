import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/interfaces';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UserLoginService } from 'src/app/shared/services/user-login.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productList!: Product[];
  pagination: boolean = true;
  PageNum!: number;
  constructor(private route: Router, private productsServiece: ProductsService, private paginationPageNum: PaginationService) { }

  reciveItemDate(productItem: Product) {
    console.log('from Parent', productItem);
    this.route.navigate([`store/item/${productItem.id}`])
  }
  ngOnInit(): void {
    this.paginationPageNum.pageNumberobserv.subscribe((data: any) => {
      this.PageNum = data
      this.productsServiece.paginateData(this.PageNum).subscribe((data: any) => { this.productList = data });
    });
  }
  getAll() {
    this.pagination = true;
    this.productsServiece.paginateData(1).subscribe((data: any) => { this.productList = data });
  }

  filter(categore: string) {
    if (categore === 'men') {
      categore = "men's clothing"
    } else if (categore === 'women') {
      categore = "women's clothing"
    }
    this.pagination = false;
    this.productsServiece.filterByCategories(categore).subscribe((data: any) => { this.productList = data });
  }
  toPage(num: number) {
    this.paginationPageNum.setNewPageNumber(num);
    this.productsServiece.paginateData(num).subscribe((data: any) => { this.productList = data })
  }
}