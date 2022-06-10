import { UserProps } from '../model';
import axiosClient from './axiosClient';

const CustomersApi = {
  getAll(): Promise<any> {
    const url = `/customers`;
    return axiosClient.get(url);
  },
  setData(data: any): Promise<any> {
    const url = `/customers`;
    return axiosClient.post(url, data);
  },
  searchData(params: any) {
    const url = `/search/customers`;
    return axiosClient.get(url, { params });
  },
  getById(id: number): any {
    const url = `/customers/${id}`;
    return axiosClient.get(url);
  },
  getParam(params: any) {
    const url = '/customers';
    return axiosClient.get(url, { params });
  },
  delete(id: any): Promise<any> {
    const url = `/customers${id}`;
    return axiosClient.post(url);
  },
  update(data: any) {
    const url = `/customers/${data.userId}`;
    return axiosClient.patch(url, data);
  },
};
export default CustomersApi;
