import {EmployeesState, EmployeeAction, EmployeesActionTypes, WorkLogsActionTypes} from "../types/emloyees";

const initialState: EmployeesState = {
    loading: false,
    employees: [],
    worklogs:[],
    error: null
};
  
 export default function EmployeesReducer(state = initialState, action: EmployeeAction): EmployeesState {
    switch (action.type) {
        case EmployeesActionTypes.FETCH_EMPLOYEES_STARTED:
            return {
            ...state,
            loading: true
            };
        case EmployeesActionTypes.SET_ALL_EMPLOYEERS:
            return { ...state, loading:false, employees: action.payload};
        case EmployeesActionTypes.FETCH_EMPLOYEESS_FAILURE:
            return {
            ...state,
            loading: false,
            error: action.payload
            };
        case WorkLogsActionTypes.FETCH_WORKLOGS_STARTED:
            return {
                ...state,
                loading: true
            };
        case WorkLogsActionTypes.SET_ALL_WORKLOGS:
            return { ...state, loading:false, worklogs: action.payload };
        case WorkLogsActionTypes.FETCH_WORKLOGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
