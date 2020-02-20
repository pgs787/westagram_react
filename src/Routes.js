import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/main/Main";
import Login from "./Pages/login/Login";
import signIn from "./Pages/signIn/signIn";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/sign" component={signIn} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
