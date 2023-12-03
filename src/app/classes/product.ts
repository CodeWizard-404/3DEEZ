export class Product {
  id!: number;
  title!: string;
  photo!: string;
  price!: number;
  isNew!: boolean;
  releaseDate!: string;
  details: {
    color?: string;
    size?: string;
    description?: string;
  }[];
  category!: string;


  constructor() {
    this.details = [];
  }
}