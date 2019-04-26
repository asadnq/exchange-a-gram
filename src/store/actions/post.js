import {
  CREATE_POST,
  CREATE_POST_FULFILLED,
  CREATE_POST_REJECTED,
  GET_POSTS,
  GET_POST,
  GET_POSTS_COMMENT
} from './types';
import instance from './axios.config';

export const getPosts = () => {
  return {
    type: GET_POSTS,
    payload: instance.get('/posts')
  };
};

export const getPost = id => {
  return {
    type: GET_POST,
    payload: instance.get('/posts/' + id)
  };
};

export const getPostsComment = id => {
  return {
    type: GET_POSTS_COMMENT,
    payload: instance.get(`/posts/${id}/comments`)
  };
};

export const createPost = post => dispatch => {
  return {
    type: CREATE_POST,
    payload: instance
      .post('/posts', post)
      .then(res => {
        dispatch({
          type: CREATE_POST_FULFILLED,
          payload: res.data
        });
        console.log(res.data);
      })
      .then(err => {
        console.log(err);
        dispatch({ type: CREATE_POST_REJECTED });
      })
  };
};
