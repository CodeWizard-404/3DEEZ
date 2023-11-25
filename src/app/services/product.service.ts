import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getPurchasedProducts() {
    throw new Error('Method not implemented.');
  }

  private productsUrl = 'http://localhost:3000/products'; 
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getAllProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  getPurchasedItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}/purchased-items`);
  }

  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}/cart-items`);
  }
  getClientProducts() {
    throw new Error('Method not implemented.');
  }
  deleteClientProduct(productId: number) {
    throw new Error('Method not implemented.');
  }


  private cart: any[] = []; 

  addToCart(product: any): void {
    this.cart.push(product);
  }

  getCart(): any[] {
    return this.cart;
  }
}
