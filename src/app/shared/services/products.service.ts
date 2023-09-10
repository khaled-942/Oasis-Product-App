import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  getProductsById(id:number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  filterByCategories(categore:string){
    return this.http.get(`https://fakestoreapi.com/products/category/${categore}`)
  }
}
