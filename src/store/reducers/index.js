import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import auth from './auth';

const rootReducer = combineReducers({
    user,
    post,
    auth
});

export default rootReducer;