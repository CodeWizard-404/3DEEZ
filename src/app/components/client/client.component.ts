// client.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { User } from '../../classes/user';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  user: User | undefined;
  purchasedItems: Product[] = [];
  cartItems: Product[] = [];

  constructor(private userService: UserService, private productService: ProductService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.user = user;
    });

    this.productService.getPurchasedItems().subscribe((items) => {
      this.purchasedItems = items;
    });

    this.productService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }
}
