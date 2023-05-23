import axios from 'axios';

//ndraso vetikaok
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URI,
    responseType: 'json', 

})


export default axiosInstance;