import axios from 'axios';
import store from '../store';

const instance = axios.create({
    baseURL: 'http://192.168.1.109:3333/api/v1'
});

instance.interceptors.request.use((config) => {
    const token = store.getState().user.access_token.token;;
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance; 