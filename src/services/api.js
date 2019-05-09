import axios from 'axios';

const api = axios.create({ baseURL: 'https://dbacea1f.ngrok.io' });

export default api;