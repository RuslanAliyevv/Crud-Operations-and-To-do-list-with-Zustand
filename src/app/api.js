import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    alert("Xəta baş verdi");
    return Promise.reject(error);
  }
);

export default api;