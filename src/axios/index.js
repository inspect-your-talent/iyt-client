import axios from 'axios';

//baseUrl diganti sesuai ip laptop
const instance = axios.create({
    timeout: 30000,
    baseURL: 'http://35.187.255.216/'
})

export default instance;
