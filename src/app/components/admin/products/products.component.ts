import { Component } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { ProductService } from '../../../services/product.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any[] = []; // Assuming a product model/interface
  clients: any[] = []; // Assuming a user model/interface
  purchasedProducts: any[] = []; // Assuming a purchase model/interface
  contactMessages: any[] = []; // Assuming a contact message model/interface

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    // Fetch initial data
    this.loadProducts();
    this.loadClients();
    this.loadPurchasedProducts();
    this.loadContactMessages();
  }

  // Product Management
  loadProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(): void {
    // Logic to open a modal or redirect to add product page
  }

  editProduct(product: any): void {
    // Logic to open a modal or redirect to edit product page
  }

  deleteProduct(product: any): void {
    // Logic to delete product
  }

  // Client Management
  loadClients(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.clients = data.filter(user => user.role === 'client');
    });
  }

  viewClientDetails(client: any): void {
    // Logic to open a modal or redirect to client details page
  }

  deleteClient(client: any): void {
    // Logic to delete client
  }

  // Purchased Products
  loadPurchasedProducts(): void {
    // Assuming a method in the productService to get purchased products
    //this.productService.getPurchasedProducts().subscribe(data => {
    //  this.purchasedProducts = data;
    //});
  }

  // Comments and Messages
  loadContactMessages(): void {
    //this.contactService.getContactMessages().subscribe(data => {
    //  this.contactMessages = data;
    //});
  }

  deleteMessage(message: any): void {
    // Logic to delete contact message
  }
}
