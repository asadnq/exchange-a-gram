import { LOGIN } from './types';

import instance from './axios.config';
import NavigationService from '../../navigations/NavigationService';


export const login = user => dispatch => ({
  type: LOGIN,
  payload: {
    promise: instance
      .post('/auth/login', user)
      .then(res => {
        dispatch({ type: 'LOGIN_FULFILLED', payload: res });
        NavigationService.navigate('Home');
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'LOGIN_REJECTED' });
      })
  }
});