import axiosClient from './axiosClient';

const NewApi = {
  getAll(params) {
    const url = '/new';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/new/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/new`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/new/${data.id}`;
    return axiosClient.patch(url, data);
  },
  detele(id) {
    const url = `/new/${id}`;
    return axiosClient.get(url);
  },
};
export default NewApi;
