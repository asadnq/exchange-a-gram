import instance from './axios.config';
import {
  LIKE_POST,
  LIKE_POST_FULFILLED,
  DISLIKE_POST_FULFILLED
} from './types';

export const likePost = post_id => dispatch => {
  return {
    type: LIKE_POST,
    payload: instance
      .post('/likes', { post_id })
      .then(res => {
        if (res.status === 201) {
          alert('liked')
          dispatch({ type: LIKE_POST_FULFILLED, payload: res });
        } else if (res.status === 200) {
          alert('disliked')
          dispatch({ type: DISLIKE_POST_FULFILLED, payload: res });
        }
      })
      .catch(err => {
        console.log(err);
      })
  };
};
