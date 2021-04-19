import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Table({ employees }) {

  const formatDate = (date) => {
    let arrDate = date.split("-");
    [arrDate[0], arrDate[2]] = [arrDate[2], arrDate[0]];
    return arrDate.join(".");
  };

  const sortDate = (date) =>
    date.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr className="thead-dark col-12">
            <th scope="col">ID</th>
            <th scope="col">ФИО</th>
            <th scope="col">Дата рождения</th>
          </tr>
        </thead>
        <tbody>
          {employees && sortDate(employees).map((employees) => (
            <tr key={employees.id}>
              <td align="center">{employees.id}</td>
              <td>
                <Link to={`/worklog/${employees.id}`}>
                  {employees.lastName} {employees.firstName}{" "}
                  {employees.middleName}
                </Link>
              </td>
              <td>{formatDate(employees.birthDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state) => ({
  employees:state.employess,
});

export default connect(mapStateToProps, null)(Table);
