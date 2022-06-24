import { all } from "redux-saga/effects";
import { UsersSagas } from "./user";
export function* rootSaga(){
    yield all([...UsersSagas])
}