export interface Product {
name: any;
  id: number;
  title: string;
  photo: string;
  price: number;
  isNew: boolean;
  releaseDate: string;
  details: { color: string; size: string }[];
  category: string;
}
