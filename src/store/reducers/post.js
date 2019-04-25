import {
  GET_POSTS_PENDING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED, CREATE_POST_PENDING, CREATE_POST_FULFILLED, CREATE_POST_REJECTED 
} from '../actions/types';
import dummyImg from '../../../assets/dummy/mountain.jpg';
import dummyImg2 from '../../../assets/dummy/road.jpg';

const initialState = {
  posts: [],
  post: {
    image: dummyImg,
    body: 'post one',
    user: 'username',
    comments: [
      {
        user: 'another user',
        body: 'splendid!'
      },
      {
        user: 'dummy user',
        body: 'nice'
      }
    ]
  },
  isLoading: false
};
const post = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_FULFILLED:
      return {
        ...state,
        posts: action.payload.data.data
      }
    case CREATE_POST_FULFILLED:
        console.log(action.payload);
        return {
            ...state,
            posts: state.posts.concat(action.payload.data)
        }
    default:
      return state;
  }
};

export default post;
