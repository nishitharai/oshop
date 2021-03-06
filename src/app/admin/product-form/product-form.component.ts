import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { ProductService } from '../../shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: any = {};
  id;



  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).subscribe(p => this.product = p)
    }
  }

  ngOnInit(): void {
  }

  save(product) {
    if (this.id) {this.productService.update(this.id, product);
    }
    else {this.productService.create(product);
    }

    this.router.navigate(['admin/products']);


  }

  delete(){
    if(!confirm('Are you sure you want to delete this product?')) return


      this.productService.delete(this.id);
      this.router.navigate(['admin/products']);
    
  }

}
