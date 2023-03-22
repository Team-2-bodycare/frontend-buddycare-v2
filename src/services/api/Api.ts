import axios from "axios";

export const Api = axios.create({
  baseURL: 'http://localhost:3333/'
  // baseURL: "https://buddycare-api.onrender.com",
});

Api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("jwt");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.error(error);
  }
});
