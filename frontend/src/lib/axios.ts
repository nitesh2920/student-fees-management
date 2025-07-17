// src/lib/axios.ts
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change this to your backend URL
   // if using cookies for auth (optional)
});

// Add interceptors if needed (optional)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = `${token}`;
  }
  return config;
});

export default API;
