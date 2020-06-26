import axios from "axios";

const api = axios.create({
  baseURL: "http://projeto-fcamara.herokuapp.com",
});

export default api;
