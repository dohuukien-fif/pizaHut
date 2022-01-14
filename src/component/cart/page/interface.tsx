export interface inforProps {
  sizeName: string;
  sizePrice: number;
  soles: string;
  moreName: string;
  morePrice: number;
}

export interface productProps {
  categories: string;
  id: number;
  image: string;
  name: string;
  price: number;
  detail: string;
  size: any;
  soles: any[];
  Spice: string;
  items: any[];
  more: any[];
}
export interface cartFeaturesProps {
  categories: string;
  id: number;
  image: string;
  name: string;
  price: number;
  detail: string;
  size: any;
  soles: any[];
  Spice: string;
  items: any[];
  more: any[];
  product: productProps;
  quantity: number;
  infor: inforProps;
}
