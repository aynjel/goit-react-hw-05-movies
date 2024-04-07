import axios from 'axios';
import Notiflix from 'notiflix';

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: 'f0267d877ee20bdb330ffd61eaefde7d',
  },
});

axiosInstance.interceptors.response.use(
  config => {
    Notiflix.Loading.pulse();
    return config;
  },
  error => {
    Notiflix.Loading.failure();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    Notiflix.Loading.remove();
    return response;
  },
  error => {
    Notiflix.Loading.remove();
    return Promise.reject(error);
  }
);
