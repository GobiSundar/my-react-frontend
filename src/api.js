import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/gobi/website_services',
});

export default API;
