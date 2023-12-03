import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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

  getProductsBySearchTerm(searchTerm: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map((products) =>
        products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }
  




  
  addProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.productsUrl}`, product);
  }


  deleteProduct(productId: number): Observable<void> {
    const url = `${this.productsUrl}/${productId}`;
    return this.http.delete<void>(url);
  }


  updateProduct(product: Product): Observable<any> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.patch(url, product);
  }


  getPurchasedItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}/purchased-items`);
  }


  getClientProducts() {
    throw new Error('Method not implemented.');
  }
  deleteClientProduct(productId: number) {
    throw new Error('Method not implemented.');
  }


  private cart: Product[] = []; 
  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}/cart-items`);
  }
  addToCart(product: Product): void {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }


  getPurchasedProducts() {
    throw new Error('Method not implemented.');
  }

}
