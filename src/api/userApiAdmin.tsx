import axiosClient from './axiosClient';

const userApi = {
  register(data: any) {
    const url = `/auth/admin/register `;
    return axiosClient.post(url, data);
  },
  Login(data: any) {
    const url = `/auth/admin/login`;
    return axiosClient.post(url, data);
  },
  update(data: any) {
    const url = `/user/admin/${data.id}`;
    return axiosClient.patch(url, data);
  },
  updateImage(data: any) {
    const url = `/user/admin/image/${data.id}`;
    return axiosClient.patch(url, data);
  },
};
export default userApi;
