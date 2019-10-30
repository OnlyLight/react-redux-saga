import * as Types from "../actions/actionTypes";

const movieReducers = (movie = [], action) => {
  switch (action.type) {
    case Types.FETCH_SUCCESSED:
      return action.receivedMovies;
    case Types.FETCH_FAILED:
      return [];
    default:
      return movie;
  }
};

export default movieReducers;
