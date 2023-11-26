export class Product {
  id!: number;
  title!: string;
  photo!: string;
  price!: number;
  isNew!: boolean;
  releaseDate!: string;
  details: { color?: string; size?: string; description?: string }[];
  category!: string;


  constructor() {
    this.details = [];
  }
}



// export interface Product {
//     id: number;
//     title: string;
//     photo: string;
//     price: number;
//     isNew: boolean;
//     releaseDate: string;
//     details: {
//   description: string; color: string; size: string 
//   }[];
//     category: string;
//   }
  