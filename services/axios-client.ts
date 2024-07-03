// src/api/axios.js
import axios from "axios";

const baseUrl = "http://localhost:5000/api/";

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");

  if (token && !config.headers["Authorization"]) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  // if (token) {
  //   if (isTokenExpired(token)) {
  //     const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
  //     if (refreshToken) {
  //       try {
  //         const newToken = (await authService.refreshToken(refreshToken)).accessToken
  //         token = newToken
  //         store.dispatch(updateAccessToken(newToken))
  //         config.headers['Authorization'] = `Bearer ${token}`
  //       } catch {
  //         /* empty */
  //       }
  //     }
  //   } else if (!config.headers['Authorization']) {
  //     config.headers['Authorization'] = `Bearer ${token}`
  //   }
  // }

  return config;
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Handle the response data
    return response;
  },
  (error) => {
    // Handle the error
    console.error("Error response:", error);
    return Promise.reject(error);
  }
);

export default axiosClient;
