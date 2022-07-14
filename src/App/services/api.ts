import axios from "axios";

export const url = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
