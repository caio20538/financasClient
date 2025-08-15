import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api", // base da sua API
  headers: {
    "Content-Type": "application/json",
  },
});
