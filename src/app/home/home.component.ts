import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartItem.model';
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = [];
  searchQuery: string = '';
  constructor(private productService: ProductService, private cartservice: CartService,
    private e1: ElementRef,
    private renderer: Renderer2) {

  }
  ngOnInit() {
    const elements = this.e1.nativeElement.querySelectorAll('.category');

    elements.forEach((element: Element) => {
      this.renderer.listen(element, "click", () => {
        const categoryName = element.getAttribute('data-category');
        if (categoryName) {
          this.productService.getProductsByCategory(categoryName).subscribe(
            (data) => {
              this.products = data;
            },
          )
        }
      });
    });

    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
    )
   
  };

  OnAdd(product: Product) {
    this.cartservice.addItem(this.createCartItemFromProduct(product));
  }
  createCartItemFromProduct(product: Product) {
    const { id, title, description, price, image } = product;
    const quantity: number = 1;
    const cartItem: CartItem = { id, title, description, price, image, quantity };
    return cartItem;

  }
}
