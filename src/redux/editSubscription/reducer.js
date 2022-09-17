//action의 type을 보고 핸들링
import { NEXT_VIEW, PREV_VIEW, VIEW_OPTION } from "./types";

const initialView={
    view: 0
}

const viewReducer=(state=initialView, action)=>{
    switch(action.type){
        case NEXT_VIEW:
            return{
                ...state, 
                view: state.view+1
            }
        case PREV_VIEW:
            return{
                ...state, 
                view: state.view-1
            }
        default:
            return state;
    }
}
export default viewReducer

