import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ApiResponse, AppError } from '@/types';

// Extend ImportMeta interface for Vite environment variables
declare global {
  interface ImportMetaEnv {
    readonly VITE_NODE_DOC_API: string;
    readonly VITE_ML_DOC_API: string;
  }
}

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NODE_DOC_API,
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    return response;
  },
  (error: AxiosError<ApiResponse<any>>) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/SigninInfo';
    }
    
    const appError: AppError = {
      message: error.response?.data?.error || error.message || 'An error occurred',
      code: error.response?.status?.toString(),
      details: error.response?.data,
    };
    
    return Promise.reject(appError);
  }
);

// API helper functions
export const apiClient = {
  get: <T>(url: string, config = {}) => 
    api.get<ApiResponse<T>>(url, config).then(res => res.data),
  
  post: <T>(url: string, data = {}, config = {}) => 
    api.post<ApiResponse<T>>(url, data, config).then(res => res.data),
  
  put: <T>(url: string, data = {}, config = {}) => 
    api.put<ApiResponse<T>>(url, data, config).then(res => res.data),
  
  patch: <T>(url: string, data = {}, config = {}) => 
    api.patch<ApiResponse<T>>(url, data, config).then(res => res.data),
  
  delete: <T>(url: string, config = {}) => 
    api.delete<ApiResponse<T>>(url, config).then(res => res.data),
};

export default api;
