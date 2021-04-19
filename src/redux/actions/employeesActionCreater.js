import * as constants from "./../constants";
import { getEmployees, getWorklog } from "../../api";

export const fetchAllEmployees = () => {
  return (dispatch) => {
    dispatch(fetchEmployeesStarted());
    getEmployees().then((data) => {
      dispatch(fetchEmployeers(data))
    })
    .catch(err => {
      dispatch(fetchEmployeesFailure(err.message));
    });
  };
} 

const fetchEmployeesStarted = () => ({
  type: constants.FETCH_EMPLOYEES_STARTED
});

const fetchEmployeers = (data) => {
  return {
    type: constants.SET_ALL_EMPLOYEERS,
    payload: data
  };
};

const fetchEmployeesFailure = error => ({
  type: constants.FETCH_EMPLOYEESS_FAILURE,
  payload: {
    error
  }
});

export const fetchAllWorklogs = () => {
  return (dispatch) => {
    dispatch(fetchWorklogsStarted());
    getWorklog().then((data) => {
      dispatch(fetchWorklogs(data))
    })
    .catch(err => {
      dispatch(fetchWorklogsFailure(err.message));
    });
  };
} 

const fetchWorklogsStarted = () => ({
  type: constants.FETCH_WORKLOGS_STARTED
});

const fetchWorklogs = (data) => {
  return {
    type: constants.SET_ALL_WORKLOGS,
    payload: data
  };
};

const fetchWorklogsFailure = error => ({
  type: constants.FETCH_WORKLOGS_FAILURE,
  payload: {
    error
  }
});


