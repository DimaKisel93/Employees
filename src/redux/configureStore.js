import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import employees from "./reducers/reducer";

export default function configureStore(initialState) {
  return createStore(employees, initialState, applyMiddleware(thunk));
};



