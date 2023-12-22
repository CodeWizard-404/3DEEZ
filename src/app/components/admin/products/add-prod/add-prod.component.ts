import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../classes/product';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent {

  product: Product = {
    id: 0, 
    title: '',
    photo: '',
    price: 0,
    isNew: true,
    releaseDate: new Date().toISOString().split('T')[0], 
    details: [],
    category: ''
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmitAdd(): void {
    this.productService.getAllProducts().subscribe(products => {
      const lastId = Math.max(...products.map(p => p.id), 0);
      this.product.id = lastId + 1;

      this.productService.addProduct(this.product).subscribe(() => {
        alert('Product added successfully');
        this.router.navigate(['/admin']);
      });
    });
  }

  AddPhoto(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.product.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
