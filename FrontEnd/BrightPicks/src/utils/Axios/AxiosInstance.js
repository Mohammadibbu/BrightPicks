import axios from "axios";
const REACT_APP_API_URL = "http://localhost:5500/brightpicks";
const REACT_APP_API_KEY = "lWvq4qIHDlyGoysUo1gHy6Aney3mva";

const axiosInstance = axios.create({
  baseURL: REACT_APP_API_URL || "http://localhost:5500/brightpicks",
  timeout: 10000, // Set a timeout of 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": REACT_APP_API_KEY || "default-api-key",
  },
});

const handleAxiosError = (error) => {
  switch (error.response?.status) {
    case 400:
      return "Bad Request: The server could not understand the request due to invalid syntax.";
    case 401:
      return "Unauthorized: Access is denied due to invalid credentials.";
    case 403:
      return "Forbidden: You do not have permission to access this resource.";
    case 404:
      return "Not Found: The requested resource could not be found.";
    case 500:
      return "Internal Server Error: The server encountered an unexpected condition.";
    default:
      return error.message || "An unknown error occurred.";
  }
};
export { axiosInstance, handleAxiosError };
