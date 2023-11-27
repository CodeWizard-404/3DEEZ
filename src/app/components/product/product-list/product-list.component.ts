import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../classes/product';
import { SearchService } from '../../../services/search.service';

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
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchService.searchTerm$.subscribe((term) => {
      console.log('Received Search Term in Product List:', term);
      this.searchTerm = term;
      this.loadProducts(term);
    });
  
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
  
  private loadProducts(searchTerm: string): void {
    console.log('Load Products with Search Term:', searchTerm);
  
    if (searchTerm.trim() === '') {
      this.productService.getAllProducts().subscribe((products) => {
        this.products = products;
      });
    } else {
      this.productService.getProductsBySearchTerm(searchTerm).subscribe((products) => {
        this.products = products;
      });
    }
  }
  

  viewProductDetails(productId: number): void {
    this.router.navigate(['/products', productId]);
  }

  onSearch(searchTerm: string): void {
    console.log('Search Term:', searchTerm);
  
    if (searchTerm.trim() !== '') {
      this.productService.getProductsBySearchTerm(searchTerm).subscribe((filteredProducts) => {
        console.log('Filtered Products:', filteredProducts);
        this.products = filteredProducts;
      });
    } else {
      this.productService.getAllProducts().subscribe((products) => {
        this.products = products;
      });
    }
  }
  

  
}
