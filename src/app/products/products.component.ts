import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../shared/services/product.service';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product';
import 'rxjs/add/operator/switchMap';

import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../shared/models/shopping-cart';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[];
  cart$: Observable<ShoppingCart>;
  category: string;


  constructor(private productService: ProductService, private route: ActivatedRoute, private shoppingCart: ShoppingCartService) {


  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCart.getCart();
    this.populateProducts();
  }

  private populateProducts(){
    this.productService.getAll()
      .pipe(switchMap(products=> {
        this.products = products;
        return this.route.queryParamMap;
      }))
    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    })

  }

  private applyFilter(){
    this.filteredProducts = (this.category) ?
  this.products.filter(p => p.category === this.category) : this.products

  }

}
