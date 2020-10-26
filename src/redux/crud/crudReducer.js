import { INSERT_USER_SUCCESS, INSERT_USER_FAILURE, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, EDIT_USER_SUCCESS, EDIT_USER_FAILURE } from "./crudTypes";


const initialState = {
    user: [],
    error: ''
}

const insertReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case INSERT_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }

            case INSERT_USER_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }

            case EDIT_USER_SUCCESS:
                return {
                    ...state,
                    user: action.payload
                }

            case EDIT_USER_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }

            case DELETE_USER_SUCCESS:
                return {
                    ...state,
                    user: action.payload
                }

            case DELETE_USER_FAILURE: 
                return {
                    ...state,
                    error: action.payload
                }

            default: 
                return state
    }
}

export default insertReducer;