import axiosClient from './axiosClient';

const SalesApi = {
  getAll(params) {
    const url = '/sales';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/sales/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/sales`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/sales/${data.id}`;
    return axiosClient.patch(url, data);
  },
  detele(id) {
    const url = `/sales/${id}`;
    return axiosClient.get(url);
  },
};
export default SalesApi;
