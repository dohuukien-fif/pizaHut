import { UserProps } from '../model';
import axiosClient from './axiosClient';

const ManagerApi = {
  getAll(): Promise<any> {
    const url = `/manager`;
    return axiosClient.get(url);
  },
  setData(data: any): Promise<any> {
    const url = `/manager`;
    return axiosClient.post(url, data);
  },
  searchData(params: any) {
    const url = `/search/manager`;
    return axiosClient.get(url, { params });
  },
  getById(id: number | string): any {
    const url = `/manager/${id}`;
    return axiosClient.get(url);
  },
  getParam(params: any) {
    const url = '/manager';
    return axiosClient.get(url, { params });
  },
  delete(id: any): Promise<any> {
    const url = `/manager${id}`;
    return axiosClient.post(url);
  },
  update(data: any) {
    const url = `/manager/${data.id}`;
    return axiosClient.put(url, data);
  },
};
export default ManagerApi;
