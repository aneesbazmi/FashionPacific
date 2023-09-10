import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartItem.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = [];
  searchQuery: string = '';
  constructor(private productService: ProductService, private cartservice: CartService){


  }
  ngOnInit(){

    this.productService.getAllProducts().subscribe(
      (data) =>{
        this.products = data;   
      },
  )};

  OnAdd(product: Product){
    this.cartservice.addItem(this.createCartItemFromProduct(product));
  }
  createCartItemFromProduct(product: Product){
    const{id, title, description, price, image } = product;
    const quantity:number = 1;
    const cartItem : CartItem = {id, title, description, price, image, quantity};
    return cartItem;

  }
}
