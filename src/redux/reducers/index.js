import { combineReducers } from "redux";
import employees from "./reducer";

const rootReducer = combineReducers({
  state:employees
});

export default rootReducer;
