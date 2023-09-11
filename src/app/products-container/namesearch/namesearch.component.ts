import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/interfaces';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-namesearch',
  templateUrl: './namesearch.component.html',
  styleUrls: ['./namesearch.component.scss']
})
export class NamesearchComponent implements OnInit {
  productList!: Product[];
  textRecived!: string
  constructor(private productsServiece: ProductsService, private route: Router, private search: SearchService) { }

  ngOnInit(): void {
    this.search.searchTextobserv.subscribe((data: any) => {
      this.textRecived = data
      this.productsServiece.searchByName(this.textRecived).subscribe((data: any) => {
        this.productList = data
        this.search.setSearchItems(this.productList.length)
      });
    });
  }
  reciveItemDate(productItem: Product) {
    this.route.navigate([`store/item/${productItem.id}`])
  }
}
