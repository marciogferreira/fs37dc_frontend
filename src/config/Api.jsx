import axios from "axios";
import { redirect } from "react-router-dom";
import swal from 'sweetalert'
const Api = axios.create({
    baseURL: 'http://localhost:3000/'
})

// Interceptor
Api.interceptors.response.use((response) => {
    // ENTRA AQUI SE FOR CODIGO DE STATUS 200 ATÉ 2XX
    return response;
}, (error) => {
    // SE FOR ERRO ENTRA AQUI
    swal('Oops...', error.response.data.message, 'error')
    console.log(error.response.status)

    // quando for 403 é TOken inválido.
    if(error.response.status == 403) {
        localStorage.removeItem('tokenAppHotel')
        window.location.url = '/'
    }
    return Promise.reject(error);
})

Api.interceptors.request.use((config) => {
    config.headers["token"] = localStorage.getItem('tokenAppHotel')
    return config;
}, (error) => {
    return Promise.reject(error);
})
export default Api;
