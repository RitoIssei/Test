import axios, { AxiosError, AxiosResponse } from 'axios';
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

const headers = {
  'Content-Type': 'application/json',
  'ngrok-skip-browser-warning': false,
};

if (process.env.NEXT_PUBLIC_API_BASE_URL === 'development') {
  headers['ngrok-skip-browser-warning'] = false;
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com/',
  timeout: 10000,
  headers: headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem('accessToken');

   
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Xử lý lỗi response
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (
    error: AxiosError<{
      message: string;
      statusCode: number;
    }>,
  ) => {
    if (error.response?.data.message === 'Unauthorized') {
    
    }
    return Promise.reject(error.response?.data ?? 'Something error');
  },
);

export default axiosInstance;
