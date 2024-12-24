import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getAllProduct(){
    return this.http.get("https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=16")
  }

  getAllProductByCategory(category:any): Observable<any>{
    return this.http.get(`https://api.everrest.educata.dev/shop/products/${category}`)
  }

  getDataById(id: any) {
    return this.http.get(`https://api.everrest.educata.dev/shop/products/id/${id}`);
  }

  getProductsByCategoryId(id: String) {
    return this.http.get(`https://api.everrest.educata.dev/shop/products/category/${id}?page_index=1&page_size=50
`)
  }
}
