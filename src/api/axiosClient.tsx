import axios from 'axios';
// const TOKEN = JSON.parse(localStorage.getItem('user') || '');

const axiosClient = axios.create({
  baseURL: 'https://api-pizza-home.herokuapp.com/api',
  
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
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
