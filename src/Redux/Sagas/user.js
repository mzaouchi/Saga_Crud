import {
    takeEvery,
    call,
    fork,
    put
  } from "redux-saga/effects";
  
import { getOneUserError, getOneUserSuccess, getUserError, getUserSuccess } from "../Actions";
import { GET_ONE_USER_REQUEST, GET_USER_REQUEST } from "../ActionTypes";
import { getOneUser, getUsers } from "../Api";

function* workerGetUsers(){
   
    try {
        const res = yield call(getUsers)
        yield put(getUserSuccess(res.data))
    } catch (error) {
        yield put(getUserError(error))
    }
}

function* watcherGetUsers(){
        yield takeEvery(GET_USER_REQUEST,workerGetUsers)
}

function* workerGetOneUser(action){
    try {
        console.log(action.payload)
        const res = yield call(()=>getOneUser(action.payload))
        console.log(res.data)
        yield put(getOneUserSuccess(res.data))
    } catch (error) {
        yield put(getOneUserError(error))
    }
}

function* watcherGetOneUser(){
    yield takeEvery(GET_ONE_USER_REQUEST,workerGetOneUser)
}
export const UsersSagas=[
    fork(watcherGetUsers),
    fork(watcherGetOneUser)
]