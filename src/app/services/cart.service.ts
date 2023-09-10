import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : CartItem[] = [];
  cartItemSubject = new  BehaviorSubject<CartItem[]>([]);
  constructor() { }

  addItem(citem: CartItem){
    this.cartItems = this.cartItems.filter(function(item){
      return item.id !== citem.id;
    });


    this.cartItems.push(citem);
    this.cartItemSubject.next(this.cartItems);
  }
  calcualteTotal(): Observable<number>{

    return this.cartItemSubject.pipe(map(item =>
      item.reduce(function(sum, current){ return sum + current.price * current.quantity}, 0)));
  }

  getCartItems(){
    return  this.cartItemSubject.asObservable();
  }

  removeProdFromCart(ID : number){

    this.cartItems = this.cartItems.filter(function(item){
      return item.id !== ID;
    });

    this.cartItemSubject.next(this.cartItems);
  }

  getCartLength(): Observable<number> {
    return this.cartItemSubject.pipe(map(items => items.length));
  }
  increaseCartITemQuantity(pID: number){
    let item = this.cartItems.find(product => product.id == pID);

    if(item !== undefined){
      item.quantity = item?.quantity + 1;
    }
    this.cartItemSubject.next(this.cartItems);
    console.log("check, i nexted the observabale");
  }
  decreaseCartITemQuantity(pID: number){
    let item = this.cartItems.find(product => product.id == pID);

    if(item !== undefined){
      if(item.quantity>1)
        item.quantity = item?.quantity - 1;
    }
    this.cartItemSubject.next(this.cartItems);
    console.log("check, i nexted the observabale");
  }
}
