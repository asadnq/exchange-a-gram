import { LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED } from '../actions/types';

const initialState = {
    user: {},
    access_token: {},
    isAuthenticated: false,
    isLoading: false
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_FULFILLED:
            alert('login success')
            console.log(action.payload.data.user)
            return {
                user: action.payload.data.user,
                access_token: action.payload.data.access_token,
                isAuthenticated: true,
                isLoading: false
            };
        case LOGIN_REJECTED:
        alert('login error')
            return {
                user: {},
                access_token: {},
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}

export default auth;