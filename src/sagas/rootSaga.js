import { all, fork } from "redux-saga/effects";
import { watchFetchMovie, watchAddMovie } from "./movieSaga";

export default function* rootSaga() {
  yield all([fork(watchFetchMovie), fork(watchAddMovie)]);
}
