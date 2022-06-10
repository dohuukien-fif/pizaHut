import { UserProps } from '../model';
import axiosClient from './axiosClient';

const usersApi = {
  getAll(): Promise<UserProps> {
    const url = `/user`;
    return axiosClient.get(url);
  },
  getParam(params: any) {
    const url = '/user';
    return axiosClient.get(url, { params });
  },
  update(data: any) {
    const url = `/user/${data.id}`;
    return axiosClient.patch(url, data);
  },
  searchData(params: any) {
    const url = `/search/users`;
    return axiosClient.get(url, { params });
  },
};
export default usersApi;
