import * as actionTypes from "./ActionTypes"


const initialState={
    count:0
    // cost:0
}
export const reducer=(state= initialState ,action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
        case actionTypes.DECREMENT:
            if ( state.count <= 0){
                return {
                    count:state.count=0
                }
            }
            return{
                ...state,
                count:state.count-1
            }
        default:
            return state
    }
}