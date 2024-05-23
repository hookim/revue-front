import axios from "axios";

const axios_instance = axios.create({
  baseURL : import.meta.env.VITE_SERVER_API
})

export default axios_instance;