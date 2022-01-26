import axios from 'axios';
// const TOKEN = JSON.parse(localStorage.getItem('user') || '');

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',

    //the token is a variable which holds the token
  },
});
axiosClient.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    // config.headers.Authorization = 'AUTH_TOKEN';

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
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
