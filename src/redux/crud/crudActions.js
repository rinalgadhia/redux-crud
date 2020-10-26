import Axios from "axios";
import { INSERT_USER_SUCCESS, INSERT_USER_FAILURE, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, EDIT_USER_SUCCESS, EDIT_USER_FAILURE } from "./crudTypes";


export const insertUserSuccess = (data) => {
    return {
        type: INSERT_USER_SUCCESS,
        payload: data
    }
}

export const insertUserFailure = (error) => {
    return {
        type: INSERT_USER_FAILURE,
        payload: error
    }
}

export const insertUser = (user) => {
   
    let formData = new FormData();

    formData.append("user_name", user.user_name)
    formData.append("email", user.email)
    formData.append("phone_no", user.phone_no)
    formData.append("password", user.password)


    return dispatch => {
        Axios.post("http://localhost/users/insert.php", formData)
            .then(response => {
                console.log(response)
                dispatch(insertUserSuccess(response.data));

            })
            .catch(error => {
                console.log(error);
                dispatch(insertUserFailure(error.message))
            })
    }
}

export const editUserSuccess = (data) => {
    return {
        type: EDIT_USER_SUCCESS,
        payload: data,
    }
}

export const editUserFailure = (error) => {
    return {
        type: EDIT_USER_FAILURE,
        payload: error,
    }
}

export const editUser = (user, userId) => {

    let formData = new FormData();

    formData.append("user_id", userId);
    formData.append("user_name", user.user_name);
    formData.append("email", user.email);
    formData.append("phone_no", user.phone_no);
    formData.append("password", user.password);

    return dispatch => {
        Axios.post("http://localhost/users/update.php", formData)
            .then(response => {
                console.log(response);
                dispatch(editUserSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(editUserFailure(error.message));
            })
    }
}

export const deleteUserSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS
    }
}

export const deleteUserFailure = (error) => {
    return {
        type: DELETE_USER_FAILURE,
        payload: error,
    }
}

export const deleteUser = (userId) => {
    let formData = new FormData();

    formData.append("user_id", userId);
    return dispatch => {
        Axios.post("http://localhost/users/delete.php", formData)
            .then(response => {
                console.log(response)
                document.getElementById("row"+userId).remove();
                dispatch(deleteUserSuccess());
            })
            .catch(error => {
                console.log(error)
                dispatch(deleteUserFailure(error.message))
            })
    }
}