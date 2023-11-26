import { Product } from "./product";

export interface Purchase {
  productId: number;
  product: Product;
  client: User;
  quantity: number;
  totalPrice:number;
}

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  role: 'admin' | 'client';
  purchasedProducts: Purchase[];
}
