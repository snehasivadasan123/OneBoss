import axios from "axios";
const baseURL = import.meta.env.VITE_API_AUTH_SERVER_URL
function getAuthToken() {
  return localStorage.getItem("access_token");
}

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR: Handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {

      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
