import axiosClient from './axiosClient';

const OrderApi = {
  add(data: any) {
    const url = `/order`;
    return axiosClient.post(url, data);
  },
  getAll() {
    const url = `/order`;
    return axiosClient.get(url);
  },
  getParam(params: any) {
    const url = '/order';
    return axiosClient.get(url, { params });
  },
  getParamDelivery(params: any) {
    const url = '/order/delivery';
    return axiosClient.get(url, { params });
  },
  update(data: any) {
    const url = `/order/${data._id}`;
    return axiosClient.patch(url, data);
  },
  getId(id: any) {
    const url = `/order/find/${id}`;
    return axiosClient.get(url);
  },
  delete(id: any) {
    const url = `/order/${id}`;
    return axiosClient.delete(url);
  },
  deleteAll() {
    const url = `/order`;
    return axiosClient.delete(url);
  },
};
export default OrderApi;
