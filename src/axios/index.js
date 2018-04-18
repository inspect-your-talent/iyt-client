import axios from 'axios';

//baseUrl diganti sesuai ip laptop
const instance = axios.create({
    baseURL: 'http://192.168.1.130:3000'
})

export default instance;