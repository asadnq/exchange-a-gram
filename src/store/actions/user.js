import { LOGIN } from './types';

import instance from './axios.config';

export const login = user => ({
    type: LOGIN,
    payload: instance.post('/auth/login', user)
})