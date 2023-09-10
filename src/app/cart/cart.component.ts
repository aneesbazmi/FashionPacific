import { Component } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartitems: CartItem[] = [];
  total_price: number = 0;

  constructor(private cartservice: CartService) {

  }
  ngOnInit() {

    this.cartservice.calcualteTotal().subscribe(total => this.total_price = total);
    this.cartservice.getCartItems().subscribe(items => this.cartitems = items);
  }
  RemoveCartItem(pID: number) {
    this.cartservice.removeProdFromCart(pID);
  }
  increaseItemQuantity(pID: number) {

    this.cartservice.increaseCartITemQuantity(pID);

  }

  decreaseItemQuantity(pID: number) {
    this.cartservice.decreaseCartITemQuantity(pID);
  }

}
