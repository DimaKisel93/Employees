import React, {useEffect} from "react";
import { RouteComponentProps } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Worklog = ( { match }: RouteComponentProps<{ employeeId?: string}> ) => {

  const {worklogs, loading, error} = useTypedSelector(state => state.employees);
  const { fetchAllWorklogs } = useActions()

  const filtredEmployeeWorklog = (worklog: any[]) => {
    return worklog.filter(item =>item.employee_id == match.params.employeeId)
  }

  useEffect(() => {
    fetchAllWorklogs()
  }, [])

  if(loading){
    return <h1>Идет загрузка...</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }

  return (
    <table className="table table-hover">
      <thead>
        <tr className="thead-dark col-12">
          <th scope="col">employee ID</th>
          <th scope="col">entrance</th>
          <th scope="col">exit</th>
        </tr>
      </thead>
      <tbody>
        {worklogs && filtredEmployeeWorklog(worklogs).map((worklog) => (
          <tr key={worklog.id}>
            <td align="center">{worklog.employee_id}</td>
            <td>{worklog.from}</td>
            <td>{worklog.to}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Worklog

