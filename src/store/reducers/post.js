import { GET_POST_PENDING, GET_POST_FULFILLED, GET_POST_REJECTED} from '../actions/types';
import dummyImg from '../../../assets/dummy/mountain.jpg';

const initialState = {
    posts: [
        {
            image: dummyImg,
            body: 'post one'
        }
    ],
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
}
const post = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default post;