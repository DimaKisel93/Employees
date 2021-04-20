import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as EmployeesActionCreators from '../redux/actions/employeesActionCreater'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(EmployeesActionCreators, dispatch)
}