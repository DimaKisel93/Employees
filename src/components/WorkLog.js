import React from "react";
import { connect } from "react-redux";

function Worklog({ worklog, match }) {

  const filtredEmployeeWorklog = (worklog) => {
    return worklog.filter(item =>item.employee_id == match.params.employeeId)
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
        {worklog && filtredEmployeeWorklog(worklog).map((worklog) => (
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

const mapStateToProps = (state) => ({
  worklog: state.worklog
});

export default connect(mapStateToProps, null)(Worklog);
