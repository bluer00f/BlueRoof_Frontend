//action: type을 리턴
import { ADD_BUILDING } from './types';

export const AddBuilding=(data)=>{
    return {
        type: ADD_BUILDING,
        building: {
            addr: data
        }
    }
}