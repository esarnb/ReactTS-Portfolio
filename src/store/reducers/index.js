import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import usernameReducer from "./username.js";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    username: usernameReducer
})

export default allReducers;