import axiosClient from './axiosClient';

const SearchApi = {
  getAll(params) {
    const url = '/search';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/search/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/search`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/search/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/search/${id}`;
    return axiosClient.get(url);
  },
};
export default SearchApi;
