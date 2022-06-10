export interface ProductProps {
  image: string;

  quantity: number;
  name: string;
  price: number;
}
export interface OrderProps {
  code: number;
  product: ProductProps;
  image: string;
  day: string;
  amount: number;
  payment: string;
  status: string;
  order: string;
  products: any;
  _id: string;
  quantity: number;
  time: string;
}
