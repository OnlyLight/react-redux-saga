import * as Types from "./actionTypes";

export const fetchMovieAction = () => {
  return {
    type: Types.FETCH_MOVIE
  };
};

export const addMovieAction = newMovie => {
  return {
    type: Types.ADD_MOVIE,
    newMovie
  };
};

export const fetchSuccessAction = receivedMovies => {
  return {
    type: Types.FETCH_SUCCESSED,
    receivedMovies
  };
};

export const fetchFailAction = () => {
  return {
    type: Types.FETCH_FAILED
  };
};
