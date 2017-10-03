import { combineReducers } from "redux";
import forismatic from "./forismatic-reducer";
import ron from "./ron-reducer";

const rootReducer = combineReducers({
  forismatic,
  ron
});

export default rootReducer;
