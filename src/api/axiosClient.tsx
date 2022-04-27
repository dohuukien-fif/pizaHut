import axios, { AxiosRequestConfig } from 'axios';
// const TOKEN = JSON.parse(localStorage.getItem('user') || '');
import { useSelector } from 'react-redux';

const axiosClient = axios.create({
  baseURL: 'https://api-pizza-home.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
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
