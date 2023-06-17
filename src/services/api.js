import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

export function createAxiosInstance() {
  
  const instance = axios.create({
    baseURL: 'https://blog-backend-production-3b74.up.railway.app',
  });

  instance.interceptors.request.use(
    (config) => {
      // Get the token from the store
      const authStore = useAuthStore();

      // Retrieve token from local storage
      authStore.setToken(localStorage.getItem('token'));
      authStore.setUser(JSON.parse(localStorage.getItem('user')));

      const token = authStore.token;

      // Add the token to the request headers
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
  });

  return instance
}