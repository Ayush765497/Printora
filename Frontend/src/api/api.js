import axios from "axios";

const API = axios.create({
  baseURL: "https://printora-backend-jyem.onrender.com",
});

export default API;