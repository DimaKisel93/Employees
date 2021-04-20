import { EmployeeAction, EmployeesActionTypes, WorkLogsActionTypes } from './../types/emloyees';
import { getEmployees, getWorklog } from "../../api";
import { Dispatch } from "react";

export const fetchAllEmployees = () => {
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try{
      dispatch(fetchEmployeesStarted());
      const response = await getEmployees().then(data => data)
      dispatch(fetchEmployeers(response))
    }catch{
      dispatch(fetchEmployeesFailure('Произошла ошибка при загрузке работников'));
    }
  ;
  }
} 

const fetchEmployeesStarted = (): EmployeeAction => ({
  type: EmployeesActionTypes.FETCH_EMPLOYEES_STARTED
});

const fetchEmployeers = (data: any[]): EmployeeAction => {
  return {
    type: EmployeesActionTypes.SET_ALL_EMPLOYEERS,
    payload: data
  };
};

const fetchEmployeesFailure = (error: string): EmployeeAction => ({
  type: EmployeesActionTypes.FETCH_EMPLOYEESS_FAILURE,
  payload: error
});

export const fetchAllWorklogs = () => {
  return async (dispatch: Dispatch<EmployeeAction>) => {
    try{
      dispatch(fetchWorkLogsStarted());
      const response = await getWorklog().then(data => data)
      dispatch(fetchWorkLogs(response))
    }catch{
      dispatch(fetchWorkLogsFailure('Произошла ошибка при загрузке работников'));
    }
  ;
  }
}

const fetchWorkLogsStarted = (): EmployeeAction => ({
    type: WorkLogsActionTypes.FETCH_WORKLOGS_STARTED
});

const fetchWorkLogs = (data: any[]): EmployeeAction => {
  return {
    type: WorkLogsActionTypes.SET_ALL_WORKLOGS,
    payload: data
  };
};

const fetchWorkLogsFailure = (error: string): EmployeeAction => ({
    type: WorkLogsActionTypes.FETCH_WORKLOGS_FAILURE,
    payload: error
});
