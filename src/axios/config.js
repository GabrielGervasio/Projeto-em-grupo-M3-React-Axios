import axios from "axios";

const blogFetch = axios.create({
    baseURL: 'https://tatuagem-api.onrender.com/',
    headers:{
        "Content-Type": "application/json",
    }
});

export default blogFetch;
