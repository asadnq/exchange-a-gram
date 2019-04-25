import { CREATE_POST, CREATE_POST_FULFILLED, CREATE_POST_REJECTED, GET_POSTS } from './types';
import instance from './axios.config';

export const getPosts = () => {
    return {
        type: GET_POSTS,
        payload: instance.get('/posts')
    }
}

export const createPost = post => dispatch => {
    return {
        type: CREATE_POST,
        payload: instance.post('/posts', post)
                    .then(res => {
                        dispatch({
                            type: CREATE_POST_FULFILLED,
                            payload: res.data
                        })
                        console.log(res.data)
                    })
                    .then(err => {
                        console.log(err);
                        dispatch({ type:CREATE_POST_REJECTED })
                    })
    }    
}