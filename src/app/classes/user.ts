export interface User {
phoneNumber: any;
    id: number;
    email: string;
    password: string;
    name: string;
    lastName: string;
    phone: number;
    address: string;
    country: string;
    postalCode: number;
    role: 'admin' | 'client';
  }
  