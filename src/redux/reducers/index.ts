import { combineReducers } from "redux";
import employees from "./reducer";

const rootReducer = combineReducers({
  state:employees,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
