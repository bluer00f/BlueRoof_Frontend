//reducer들 합치기
import { combineReducers } from "redux";
import viewReducer from "./editSubscription/reducer";
import AddBuildingReducer from "./Building/reducer";

const rootReducer=combineReducers({
    view: viewReducer,
    building: AddBuildingReducer,
})

export default rootReducer