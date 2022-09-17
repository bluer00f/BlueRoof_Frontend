//action의 type을 보고 핸들링
import { ADD_BUILDING } from "./types";
const initialValue={
    buildings: [
        {
            addr:''
        }
    ]
}

const AddBuildingReducer=(state=initialValue, action)=>{
    switch(action.type){
        case ADD_BUILDING:
           return {
                ...state, 
                buildings: state.buildings.concat(action.building)
            }
    }
    return state // "The slice reducer for key ~" 오류 해결

}

export default AddBuildingReducer;

