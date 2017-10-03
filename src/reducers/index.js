import { combineReducers } from "redux";
import forismatic from "./forismatic-reducer";
import ron from "./ron-reducer";
import foaas from "./foaas-reducer";
import dog from "./dog-reducer";

const rootReducer = combineReducers({
  forismatic,
  ron,
  foaas,
  dog
});

export default rootReducer;
