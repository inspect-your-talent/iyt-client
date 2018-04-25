import axios from 'axios';

//baseUrl diganti sesuai ip laptop
const instance = axios.create({
    timeout: 30000,
    baseURL: 'http://192.168.43.222:3000'
})

export default instance;
