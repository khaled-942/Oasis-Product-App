import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  productList: any;
  activeItem: any;
  id: any
  constructor(private activeRouter: ActivatedRoute, private productsServiece: ProductsService) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params: any) => {
      this.id = params.id;
      this.productsServiece.getProductsById(this.id).subscribe((products) => {
        console.log(products)
        this.productList = products;
      })
    });
  }
}
