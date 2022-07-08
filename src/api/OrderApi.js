import axiosClient from './axiosClient';

const OrderApi = {
  getAll(params) {
    const url = '/order';
    return axiosClient.get(url, { params });
  },
  getData() {
    const url = '/order';
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/order/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/order`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/order/${data.id}`;
    return axiosClient.patch(url, data);
  },
  delete(id) {
    const url = `/order/${id}`;
    return axiosClient.delete(url);
  },
};
export default OrderApi;
