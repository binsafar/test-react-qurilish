import axios from "axios";

const request = axios.create({
  baseURL: "https://localhost:3000/",
});

export default request;
