import axiosClient from './axiosClient';

const userApi = {
  register(data: any) {
    const url = `/auth/register `;
    return axiosClient.post(url, data);
  },
  Login(data: any) {
    const url = `/auth/login `;
    return axiosClient.post(url, data);
  },
};
export default userApi;
