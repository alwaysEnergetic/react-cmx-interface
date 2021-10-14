import axios from 'axios';
import {
  API_URL,
} from '../../utils/constants';

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(
  async (config) => {
    try {
      return {
        ...config,
        headers: {
          ...config.headers,
        },
      };
    } catch (e) {
      return config;
    }
  },
  (error) => Promise.reject(error)
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
