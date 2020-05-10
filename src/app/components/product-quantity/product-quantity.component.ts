import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Product } from '../../shared/models/product';
import { ShoppingCart } from '../../shared/models/shopping-cart';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product = {} as Product;
  @Input('shopping-cart') shoppingCart = {} as ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }
  
  ngOnInit() {
  }
  
  
  addToCart() {
    this.cartService.addToCart(this.product)
  }
  
  removeFromCart() {
    this.cartService.removeFromCart(this.product)
  }

}
