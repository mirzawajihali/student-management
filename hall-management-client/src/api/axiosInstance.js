import axios from 'axios';

// Create a new axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any request modifications here (like authentication tokens)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    console.error('API Error:', error);
    if (error.code === 'ERR_NETWORK') {
      console.error('Network error - please check if the server is running');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance; 