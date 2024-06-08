import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://6634b1ce9bb0df2359a26949.mockapi.io/api",
});

mainUrl.interceptors.request.use((req) => {
  let token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default mainUrl;
