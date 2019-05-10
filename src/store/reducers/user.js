import { GET_USER_FULFILLED } from "../actions/types";


const initialState = {
    user: {},
    users: [],
    isLoading: false
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_FULFILLED:
            console.log(action.payload.data)
            return {
                ...state,
                user: action.payload.data.user,
                isLoading: false
            }
    default:
        return state
    }
}

export default user