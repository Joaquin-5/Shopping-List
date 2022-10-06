import axios from "axios";

export const shoppingApi = axios.create({
    baseURL: 'http://localhost:3001/api/'
})
