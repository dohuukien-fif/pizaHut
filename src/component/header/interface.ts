export interface StoreProps {
  stores: string;
  address: string;
  phone: string;
}

export interface CheckOutProps {
  id: number;
  code: number;
  day: string;
  time: string;
  product: any;
  total: number;
  discount: number;
  order: any;
  store: string;
  address: string;
  quantity: number;
}
