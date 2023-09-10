import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  total_items  : number = 0;
  constructor(private cartApi: CartService){
  }

  ngOnInit(){
    
    this.cartApi.getCartLength().subscribe(length => this.total_items = length);
  }
  
}
