import axios from "axios";

const API = axios.create({
  baseURL: "https://student-fees-management-1.onrender.com/api", 
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = `${token}`;
  }
  return config;
});

export default API;
