import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://efmhub.com/backend/",
});

export default axiosInstance;
