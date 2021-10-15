import axiosClient from './axiosClient';

const SneakerApi = {
  getAll(params) {
    const url = '/giày';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/giày/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/giày`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/giày/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/giày/${id}`;
    return axiosClient.get(url);
  },
};
export default SneakerApi;
