import { combineReducers } from "redux";
import visibilityFilter from "./action_state";
import todos from "./todo";

export default combineReducers({ todos, visibilityFilter });