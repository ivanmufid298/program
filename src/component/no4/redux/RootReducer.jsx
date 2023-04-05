import { reducer } from "./Reducer";
import { combineReducers } from "redux";

export const rootReducer=combineReducers({
    ourState:reducer,

})