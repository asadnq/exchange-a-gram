import {
  GET_POSTS_PENDING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
  CREATE_POST_PENDING,
  CREATE_POST_FULFILLED,
  CREATE_POST_REJECTED,
  GET_POST_PENDING,
  GET_POST_FULFILLED,
  GET_POST_REJECTED,
  GET_POSTS_COMMENT_FULFILLED,
  GET_POSTS_COMMENT_PENDING,
  GET_POSTS_COMMENT_REJECTED,
  ADD_COMMENT_FULFILLED,
  ADD_COMMENT_PENDING,
  ADD_COMMENT_REJECTED,
  LIKE_POST_FULFILLED
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  posts_comment: {},
  isLoading: false
};
const post = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_FULFILLED:
      return {
        ...state,
        posts: action.payload.data.data,
        isLoading: false
      };
    case GET_POSTS_COMMENT_PENDING:
    case GET_POST_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_POST_FULFILLED:
      return {
        ...state,
        post: action.payload.data.data,
        isLoading: false
      };
    case GET_POSTS_COMMENT_FULFILLED:
      console.log(action.payload.data.data)
      return {
        ...state,
        posts_comment: action.payload.data.data,
        isLoading: false
      }
    case CREATE_POST_FULFILLED:
      console.log(action.payload);
      return {
        ...state,
        posts: [action.payload.data].concat(state.posts)
      };
    case ADD_COMMENT_FULFILLED:
      return {
        ...state,
        posts_comment: {
          ...state.posts_comment,
          comments: state.posts_comment.comments.concat(action.payload.data.data)
        }
      }
    case ADD_COMMENT_REJECTED:
      return {
        ...state,
        isLoading: false
      }
    case LIKE_POST_FULFILLED:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default post;
