import Axios from "axios";
const API_BASE_URL = process.env.API_BASE_URL;

const api = Axios.create({
  baseURL: `${API_BASE_URL}/api/public`,
});

export default api;
