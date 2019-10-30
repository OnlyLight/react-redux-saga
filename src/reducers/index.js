import { combineReducers } from "redux";
import movieReducers from "./movieReducer";

const allReducers = combineReducers({
  movieReducers
});

export default allReducers;
