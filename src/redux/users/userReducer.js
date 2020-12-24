import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './userTypes';

const initialState = {
    loading: false,
    users: [],
    error: '',
}

const userReducer = (state = initialState, action) => {
    // console.log(state);
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case FETCH_USER_SUCCESS:
            setTimeout(function() {
                return {
                    ...state,
                    loading: true,
                }
            }, 3000)
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: '',
            }

        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload,
            }

        default:
            return state
    }
}

export default userReducer;