import AsyncStorage from '@react-native-community/async-storage'

import { LOGIN } from './types';
import instance from './axios.config';
import NavigationService from '../../navigations/NavigationService';

const storeToken = async (token) => {
  try{
    await AsyncStorage.setItem('userToken', token)
  } catch(e) {
    console.log(e)
  }
}

export const login = user => dispatch => ({
  type: LOGIN,
  payload: {
    promise: instance
      .post('/auth/login', user)
      .then(res => {
        dispatch({ type: 'LOGIN_FULFILLED', payload: res });
        storeToken(res.data.access_token.token)
        NavigationService.navigate('Home');
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'LOGIN_REJECTED' });
      })
  }
});