import * as constants from "./../constants";

const initialState = {
    loading: false,
    employess: [],
    worklog:[],
    error: null
  };
  
 export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case constants.FETCH_EMPLOYEES_STARTED:
            return {
            ...state,
            loading: true
            };
        case constants.SET_ALL_EMPLOYEERS:
            return { ...state, employess: action.payload };
        case constants.FETCH_EMPLOYEESS_FAILURE:
            return {
            ...state,
            loading: false,
            error: action.payload.error
            };
        case constants.FETCH_WORKLOGS_STARTED:
            return {
                ...state,
                loading: true
            };
        case constants.SET_ALL_WORKLOGS:
            return { ...state, worklog: action.payload };
        case constants.FETCH_WORKLOGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
      default:
        return state;
    }
}
