import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { UserService } from '../../../services/user.service';
import { Product } from '../../../classes/product';
import { Purchase, User } from '../../../classes/user';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent {
  purchasedProducts: Purchase[] = [];
  userId: number | undefined;

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}

  loadPurchasedProducts(): void {
    if (!this.userId) {
      return; 
    }

    this.userService.getUserById(this.userId).subscribe(user => {
      const productObservables = user.purchasedProducts.map(purchase => {
        return this.productService.getProductById(purchase.productId);
      });

      forkJoin(productObservables).subscribe(products => {
        this.purchasedProducts = user.purchasedProducts.map((purchase, index) => {
          const product = products[index] as Product;
          return {
            productId: purchase.productId,
            quantity: purchase.quantity,
            totalPrice: product.price * purchase.quantity, 
            product: product,
            client: user,
          };
        });
      });
    });
  }
}
