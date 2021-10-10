import axios from "axios";

const API = axios.create({
    baseURL: 'https://api.punkapi.com/v2/beers/'
})

export default API
