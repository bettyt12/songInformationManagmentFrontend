import { all } from "redux-saga/effects";
import { musicSaga } from "./Song";

export default function* rootSaga() {
    yield all([
    musicSaga()
    ])
}