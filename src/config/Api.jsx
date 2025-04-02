import axios from "axios";
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
    return Promise.reject(error);
})
export default Api;
