import axios from "axios";

// axios 객체 생성
const AxiosInst = axios.create({
  //   baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

AxiosInst.interceptors.request.use((config) => {
  config.headers.authorization = "token";
  config.headers["Access-Control-Allow-Origin"] = "*"; // CORS 설정(모든 리소스 허용)
  return config;
});

export default AxiosInst;
