import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ 
  providedIn: 'root'
})
export class ProductService {

  apiUrl : string = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getProductsByCategory(category: string):Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+"/category/" + category);
  };


}
