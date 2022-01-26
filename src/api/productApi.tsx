import { ListParams, ListResponse, Product } from './../model';
import axiosClient from './axiosClient';

const ProductApi = {
  getAll(params: ListParams): Promise<ListResponse<Product>> {
    const url = '/products';
    return axiosClient.get(url, { params });
  },
  get(): Promise<ListResponse<Product>> {
    const url = '/products';
    return axiosClient.get(url);
  },
  getById(id: string): Promise<Product> {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  add(data: Product): Promise<Product> {
    const url = '/products';
    return axiosClient.post(url, data);
  },
  getdata(data: Product): Promise<Product> {
    const url = `/products/search?q=${data}`;
    return axiosClient.get(url);
  },

  update(data: Partial<Product>): Promise<Product> {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default ProductApi;
