import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  newProducts: any[] = [];
  

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.newProducts = data.filter(product => product.isNew);
    });
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
}
