import axios, { AxiosRequestConfig } from 'axios';
// const TOKEN = JSON.parse(localStorage.getItem('user') || '');
import { useSelector } from 'react-redux';
import queryString from 'query-string';
const axiosClient = axios.create({
  // https://api-pizza-home.herokuapp.com/
  baseURL: 'https://api-pizza-home.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...

  //  config.headers = {
  // Authorization: `Bearer ${token}`,
  // Accept: 'application/json',
  // 'Content-Type': 'application/x-www-form-urlencoded',
  // };
  console.log('[[configToken]', config);

  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
