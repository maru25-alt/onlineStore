import{ISLOGGED_IN} from '../actions/types'

const intialState = {
    user : null
}


export default function (state = intialState, action){
    switch(action.type){
        case ISLOGGED_IN:
            return{
                ...state,
                user: action.payload
            }
        default: return state;
    }
}