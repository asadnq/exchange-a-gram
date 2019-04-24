import { LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED } from '../actions/types';

const initialState = {
    user: {},
    token: {},
    isAuthenticated: false,
    isLoading: false
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_FULFILLED:
            alert('login fulfilled')
            return {
                user: action.payload.data.user,
                token: action.payload.data.access_token,
                isAuthenticated: true,
                isLoading: false
            };
        case LOGIN_REJECTED:
        alert('login rejected')
            return {
                user: {},
                token: {},
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}

export default user;