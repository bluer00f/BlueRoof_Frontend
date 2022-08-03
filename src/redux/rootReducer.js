//reducer들 합치기
import { combineReducers } from "redux";
import viewReducer from "./editSubscription/reducer";

const rootReducer=combineReducers({
    view: viewReducer,
})

export default rootReducer