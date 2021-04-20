import React from "react";
import Table from "./components/Table";
import WorkLog from "./components/WorkLog";
import { Switch, Route } from "react-router-dom";

const App:React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Table} />
        <Route exact path="/worklog/:employeeId" component={WorkLog} />
      </Switch>
    </div>
  );
}

export default App;
