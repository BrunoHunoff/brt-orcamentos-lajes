import axios from "axios";

const apiLajes = axios.create({
    baseURL: 'http://localhost:5261'
})

export default apiLajes