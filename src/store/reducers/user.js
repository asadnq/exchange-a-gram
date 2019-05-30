import {
  GET_USER_FULFILLED,
  GET_USERS_POSTS_FULFILLED
} from '../actions/types';

const initialState = {
  user: {},
  users: [],
  isLoading: false,
  posts: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_FULFILLED:
      console.log(action.payload.data);
      return {
        ...state,
        user: action.payload.data.user,
        isLoading: false
      };
    case GET_USERS_POSTS_FULFILLED:
      return {
        ...state,
        posts: action.payload.data.data
      };
    default:
      return state;
  }
};

export default user;
