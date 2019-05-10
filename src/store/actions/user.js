import instance from './axios.config';
import { GET_USER } from './types';

export const getUser = id => {
    return {
        type: GET_USER,
        payload: instance.get('/users/' + id)
    }
}