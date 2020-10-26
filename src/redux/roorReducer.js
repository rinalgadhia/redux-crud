import {combineReducers} from "redux";
import insertReducer from "./crud/crudReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    insert: insertReducer
})

export default rootReducer;