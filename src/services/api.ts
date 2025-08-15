import axios from "axios";

export const api = axios.create({
  baseURL: "https://financasapi.onrender.com/api", // base da sua API
  headers: {
    "Content-Type": "application/json",
  },
});
