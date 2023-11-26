import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../classes/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';


  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = this.filterProducts(data);
    });
  }

  filterProducts(products: Product[]): Product[] {
    if (!this.searchTerm) {
      return products; 
    }

    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();

    return products.filter(product => 
      product.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.category.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
}
