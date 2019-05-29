import axios from 'axios';

const api = axios.create({ baseURL:'https://ad1096a2.ngrok.io'});

api.interceptors.request.use(async config => {
    const TOKEN_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHBhIiwiaWF0IjoxNTU4NzMyMzM0fQ.fATFFmy8k7QSToovOCsdHVf5cdJ5e3OLK26ppm8VoXw";

    if (TOKEN_KEY) {
      config.headers.Authorization = `Bearer ${TOKEN_KEY}`;
    }
    return config;
  });

export default api;