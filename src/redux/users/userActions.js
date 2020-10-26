import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './userTypes'
import axios from "axios"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
        
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error,
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest);
        axios.get('http://localhost/users/display.php')
            .then(response => {
                const users = response.data;
                // console.log(users);
                dispatch(fetchUserSuccess(users));
            })
            .catch(error => {
                const errMsg = error.message;
                dispatch(fetchUserFailure(errMsg));
            })
    }
}