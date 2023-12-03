import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../classes/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = []; 
  
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}
  

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.router.navigate(['/admin/products/add']);
  }
  

  editProduct(product: any): void {
    this.router.navigate(['/admin/products/edit']);
  }

  deleteProduct(product: Product): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${product.title}?`);
    if (confirmDelete) {
      this.productService.deleteProduct(product.id).subscribe(() => {
        // Reload products after deletion
        this.loadProducts();
      });
    }
  }


}
