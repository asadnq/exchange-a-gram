import instance from './axios.config';
import { ADD_COMMENT, ADD_COMMENT_FULFILLED, ADD_COMMENT_REJECTED } from './types';

export const addComment = comment => dispatch => {
    return {
        type: ADD_COMMENT,
        payload: instance.post('/comments', comment)
                .then(res => {
                    dispatch({
                        type: ADD_COMMENT_FULFILLED,
                        payload: res
                    })
                }).catch(err => {
                    dispatch({
                        type: ADD_COMMENT_REJECTED
                    })
                })
    }
}