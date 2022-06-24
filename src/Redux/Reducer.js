import { GET_ONE_USER_SUCCESS, GET_USER_SUCCESS } from "./ActionTypes"

const initialState={
    users : [],
    user : {}
}

const Reducer=(state = initialState, action)=>{
    switch (action.type) {
        case GET_USER_SUCCESS : return {...state,users : action.payload} 
        case GET_ONE_USER_SUCCESS : return {...state, user : action.payload}
        default: return state
        
    }
}

export default Reducer