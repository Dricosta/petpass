import axios from 'axios';

const api = axios.create({ baseURL: 'https://a0e17720.ngrok.io/' });

api.interceptors.request.use(async config => {
    const TOKEN_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFyY2VsbyIsImlhdCI6MTU1NjUzMzk4NX0.1Mk0q7DpqHoPOmXGDzkU4AbmcPB_XrtybM52JY0Lab0";

    if (TOKEN_KEY) {
      config.headers.Authorization = `Bearer ${TOKEN_KEY}`;
    }
    return config;
  });

export default api;