import { Product } from './product.model';
export interface CartItem extends   Omit<Product, 'category' | 'rating'> {
  quantity: number;
}