import axios from 'axios';

const server = axios.create({
  // baseURL: 'http://49.50.172.64:8080',
  baseURL: 'http://192.168.0.5:13680',
});

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 403) {
      sessionStorage.clear();
      window.location.href = '/login';
    }

    return error.response;
  },
);

server.interceptors.request.use(async (config) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcm8iLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzIzNzM5MTQ0fQ.6PYR9rLedWnUcja_6n5CYxOU9-P4tDvLT5MjtyDspqA';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    /* empty */
  }

  return config;
});

export default server;
