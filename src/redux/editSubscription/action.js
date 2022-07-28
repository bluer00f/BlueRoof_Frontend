//action: type을 리턴
import { NEXT_VIEW, PREV_VIEW} from './types';

export const nextView=()=>{
    return {
        type:NEXT_VIEW
    }
}
export const prevView=()=>{
    return {
        type: PREV_VIEW
    }
}