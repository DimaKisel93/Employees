import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllEmployees,
  fetchAllWorklogs
} from "./redux/actions/employeesActionCreater";
import Table from "./components/Table";
import WorkLog from "./components/WorkLog";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({
      loading: false
    });
    this.props.dispatchFetchAllEmployeersAction();
    this.props.dispatchFetchAllWorklogsAction();
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return "Loading...";
    }

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Table} />
          <Route exact path="/worklog/:employeeId" component={WorkLog} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchAllEmployeersAction: (data) => dispatch(fetchAllEmployees(data)),
  dispatchFetchAllWorklogsAction: (data) => dispatch(fetchAllWorklogs(data))
});

export default connect(null, mapDispatchToProps)(App);
