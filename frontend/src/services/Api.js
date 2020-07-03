import axios from "axios";

const baseURL = `https://projeto-fcamara.herokuapp.com`;

const api = axios.create({
  baseURL: baseURL,
});

export default api;
