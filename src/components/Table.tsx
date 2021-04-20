import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { sortDate } from "../common/sortEmployees";
import { formatDate } from "../common/formatDate";

const Table:React.FC = () => {

  const {employees, loading, error} = useTypedSelector(state => state.employees);
  const { fetchAllEmployees } = useActions()

  useEffect(() => {
    fetchAllEmployees()
  }, [])

  if(loading){
    return <h1>Идет загрузка...</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }

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


export default Table;
