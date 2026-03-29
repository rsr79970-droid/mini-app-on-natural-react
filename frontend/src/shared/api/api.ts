import axios from "axios";

export const URL = "http://localhost:4700"

export const api = axios.create({
    baseURL: URL,
})