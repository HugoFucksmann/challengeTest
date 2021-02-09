import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import ProtectedRoute from "./helpers/protectedRoute";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Login from "./pages/login";
import Error404 from "./pages/error";


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrarse" component={Register} />
          <ProtectedRoute exact path="/home" component={Dashboard} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
