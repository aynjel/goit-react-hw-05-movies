import axios from 'axios';
import Notiflix from 'notiflix';

export const imageUrl = 'https://image.tmdb.org/t/p/w500';

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f0267d877ee20bdb330ffd61eaefde7d',
  },
});

export const imgPlaceholder =
  'https://critics.io/img/movies/poster-placeholder.png';

export const imgCastPlaceholder =
  'https://abrf.org/wp-content/uploads/woocommerce-placeholder.png';

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
