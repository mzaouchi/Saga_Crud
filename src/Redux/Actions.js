import { GET_ONE_USER_ERROR, GET_ONE_USER_REQUEST, GET_ONE_USER_SUCCESS, GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS } from "./ActionTypes"

export const getUserRequest=()=>{
    return(
        {
            type : GET_USER_REQUEST
        }
    )
}

export const getUserSuccess=(payload)=>{
    return(
        {
            type : GET_USER_SUCCESS,
            payload
        }
    )
}

export const getUserError=(payload)=>{
    return(
        {
            type : GET_USER_ERROR,
            payload
        }
    )
}

export const getOneUserRequest=(payload)=>{
    return(
        {
            type : GET_ONE_USER_REQUEST,
            payload
        }
    )
}

export const getOneUserSuccess=(payload)=>{
    return(
        {
            type : GET_ONE_USER_SUCCESS,
            payload
        }
    )
}

export const getOneUserError=(payload)=>{
    return(
        {
            type : GET_ONE_USER_ERROR,
            payload
        }
    )
}
