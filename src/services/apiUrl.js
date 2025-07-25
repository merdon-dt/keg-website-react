// import axios from "axios";
// // export const BASE_URL = `https://sportzlete.webbazaardesign.in/api/v1/`;

// // export const IMAGE_URL = `https://sportzlete.webbazaardesign.in/`;

// // export const SITE_NAME = "Sportzlete";

// //local

// // export const BASE_URL = `http://127.0.0.1:8000/api/v1/`;

// // export const IMAGE_URL = `http://127.0.0.1:8000/`;

// // export const SITE_NAME = "Sportzlete";

// export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// export const IMAGE_URL = import.meta.env.VITE_APP_IMAGE_URL;

// export const IMAGE_URL_SECOND = import.meta.env.VITE_APP_IMAGE_URL_SECOND;

// export const SITE_NAME = import.meta.env.VITE_APP_SITE_NAME;

// export const SITE_URL = import.meta.env.VITE_APP_SITE_URL;

// const token = localStorage.getItem('authToken');
// console.log(token);

// export const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//       Authorization: token ? `Bearer ${token}` : '',
//     },
//   });

// import axios from "axios";

// export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
// export const IMAGE_URL = import.meta.env.VITE_APP_IMAGE_URL;
// export const IMAGE_URL_SECOND = import.meta.env.VITE_APP_IMAGE_URL_SECOND;
// export const SITE_NAME = import.meta.env.VITE_APP_SITE_NAME;
// export const SITE_URL = import.meta.env.VITE_APP_SITE_URL;

// export const axiosInstance = axios.create({
//   baseURL: BASE_URL,
// });

// // Attach token to every request
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Handle unauthorized responses
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       console.error("Unauthorized access, please log in again.");
//       localStorage.removeItem("authToken");

//       // Prevent infinite redirect loop
//       if (
//         window.location.pathname !== "/login" && // Not already on the login page
//         window.location.pathname !== "/" // Optional: Prevent redirect from Home if that's public
//       ) {
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

import axios from "axios";
import { toast } from "react-toastify";

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
export const IMAGE_URL = import.meta.env.VITE_APP_IMAGE_URL;
export const IMAGE_URL_SECOND = import.meta.env.VITE_APP_IMAGE_URL_SECOND;
export const SITE_NAME = import.meta.env.VITE_APP_SITE_NAME;
export const SITE_URL = import.meta.env.VITE_APP_SITE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
