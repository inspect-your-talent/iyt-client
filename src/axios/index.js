import axios from 'axios';

//baseUrl diganti sesuai ip laptop
const instance = axios.create({
    timeout: 30000,
    baseURL: 'http://35.187.255.216'
    // baseURL: 'http://192.168.1.130:3000' 
})

export default instance;
