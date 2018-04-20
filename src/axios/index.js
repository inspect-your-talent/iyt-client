import axios from 'axios';

//baseUrl diganti sesuai ip laptop
const instance = axios.create({
    timeout: 30000,
    baseURL: 'http://192.168.1.129:3000'
})

export default instance;