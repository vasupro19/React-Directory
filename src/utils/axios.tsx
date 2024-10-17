import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Create an instance of axios
const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:6969/v1", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request interceptor to attach JWT token
// api.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     // Retrieve token from localStorage (or any other storage method you use)
//     console.log(document.cookie);
//     // const token = localStorage.getItem("token");

//     // If token exists, attach it to the Authorization header
//     // if (token) {
//     //   config.headers.Authorization = `Bearer ${token}`;
//     // }

//     // return config; // Continue with the request
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

// Response interceptor to handle responses and errors globally
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     // Any successful response can pass through here if you want to handle specific responses globally
//     return response;
//   },
//   (error) => {
//     // Handle errors globally
//     if (error.response && error.response.status === 401) {
//       // If 401 Unauthorized error is received, you can handle it (e.g., log the user out or redirect to login page)
//       console.log("Unauthorized, redirecting to login...");
//       // Optionally, clear token and redirect to login
//       localStorage.removeItem("token");
//       window.location.href = "/login"; // Redirect to login page
//     }

//     // Pass the error to be handled by individual requests if necessary
//     return Promise.reject(error);
//   }
// );

export default api;
