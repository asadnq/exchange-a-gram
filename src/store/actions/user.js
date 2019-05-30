import instance from './axios.config';
import { GET_USER } from './types';

export const getUser = id => {
    return {
        type: GET_USER,
        payload: instance.get('/users/' + id)
    }
}

export const getUsersPosts = id => {
    return {
        type: GET_USERS_POSTS,
        payload: instance.get(`/users/${id}/posts`)
    }
}
