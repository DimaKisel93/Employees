export interface EmployeesState{
    employess: any[];
    worklog: any[];
    loading: boolean;
    error: null | string;
}

export enum EmployeesActionTypes{
    FETCH_EMPLOYEES_STARTED = "FETCH_EMPLOYEES_STARTED",
    SET_ALL_EMPLOYEERS = "SET_ALL_EMPLOYEERS",
    FETCH_EMPLOYEESS_FAILURE = "FETCH_EMPLOYEESS_FAILURE",
}

export enum WorkLogsActionTypes{
    FETCH_WORKLOGS_STARTED = "FETCH_WORKLOGS_STARTED",
    SET_ALL_WORKLOGS = "SET_ALL_WORKLOGS",
    FETCH_WORKLOGS_FAILURE = "FETCH_WORKLOGS_FAILURE",
}

interface FetchEmployeesStartedAction{
    type:  EmployeesActionTypes.FETCH_EMPLOYEES_STARTED;
}

interface FetchEmployeesAction{
    type: EmployeesActionTypes.SET_ALL_EMPLOYEERS;
    payload: any[]
}

interface FetchEmployeesFailureAction{
    type:  EmployeesActionTypes.FETCH_EMPLOYEESS_FAILURE;
    payload: string
}

interface FetchWorkLogsStartedAction{
    type:  WorkLogsActionTypes.FETCH_WORKLOGS_STARTED;
}

interface FetchWorkLogsAction{
    type: WorkLogsActionTypes.SET_ALL_WORKLOGS;
    payload: any[]
}

interface FetchWorkLogsFailureAction{
    type:  WorkLogsActionTypes.FETCH_WORKLOGS_FAILURE;
    payload: string
}

export type EmployeeAction = FetchEmployeesStartedAction | FetchEmployeesAction | FetchEmployeesFailureAction
| FetchWorkLogsStartedAction | FetchWorkLogsAction | FetchWorkLogsFailureAction