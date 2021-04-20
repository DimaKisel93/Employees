import { combineReducers } from "redux";
import EmployeesReducer from "./reducer";

export const rootReducer = combineReducers({
  employees: EmployeesReducer,
});

export type RootState = ReturnType<typeof rootReducer>

