import * as Types from "../actions/actionTypes";
import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./Api";

function* fetchMovie() {
  try {
    const receivedMovies = yield Api.getMovieFromApi();
    yield put({ type: Types.FETCH_SUCCESSED, receivedMovies });
  } catch (error) {
    yield put({ type: Types.FETCH_FAILED });
  }
}

function* addNewMovie(action) {
  try {
    const res = yield Api.postInsertMovieFromApi(action.newMovie);
    if (res.status === 201) {
      yield put({ type: Types.FETCH_MOVIE });
    }
  } catch (error) {}
}

export function* watchFetchMovie() {
  yield takeLatest(Types.FETCH_MOVIE, fetchMovie);
}

export function* watchAddMovie() {
  yield takeLatest(Types.ADD_MOVIE, addNewMovie);
}
