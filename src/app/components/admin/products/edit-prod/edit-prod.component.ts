import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../classes/product';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
  styleUrl: './edit-prod.component.css'
})
export class EditProdComponent  implements OnInit {
  productId!: number;
  product!: Product;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      isNew: [false],
      releaseDate: ['', Validators.required],
      category: ['', Validators.required],
      details: this.fb.group({
        color: [''],
        size: [''],
        description: ['']
      }),
    });
  }

  ngOnInit(): void {
    //this.productId = +this.route.snapshot.paramMap.get('id');
    //this.loadProduct();
  }

  loadProduct(): void {
    this.productService.getProductById(this.productId).subscribe(data => {
      //this.product = data;
      //this.editForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedProduct = { ...this.product, ...this.editForm.value };
      // this.productService.updateProduct(updatedProduct).subscribe(() => {
      //   console.log('Product updated successfully');
      //   this.router.navigate(['/admin/products']);
      // });
    }
  }
}
