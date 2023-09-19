import axios from "axios";
import Cookies from 'js-cookie';
export const API_URL = import.meta.env.VITE_API_URL;
// It just appends the API request
let cors_api_url = API_URL;
export class Api {
  static instance;

  axiosInstance = null;

  constructor() {
    
    this.axiosInstance = axios.create({
      // timeout: 30000,
      baseURL: `${cors_api_url}/api`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${Cookies.get('token')}`
      },
    });

    // Set interceptors
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // Add auth token
        const token = Cookies.get('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  } 

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getAxios() {
    return Api.getInstance().axiosInstance;
  }

  static get(url, params, config) {
    return Api.getAxios().get(url, { params, ...config });
  }

  static post(url, data, config) {
    // console.log("data req ====>", data);
    return Api.getAxios().post(url, data, config);
  }
  static delete(url, params = {}, config = {}) {
    return Api.getAxios().delete(url, { params, ...config });
  }
}
