import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products')
  }
  getProductsById(id:number){
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
  filterByCategories(categore:string){
    return this.http.get(`http://localhost:3000/products?category=${categore}`)
  }
  paginateData(pageNum:number){
    return this.http.get(`http://localhost:3000/products?_page=${pageNum}&_limit=8`)
  }
  searchByName(letters:string){
    return this.http.get(`http://localhost:3000/products?title_like=${letters}`)
  }
}
