import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import ProtectedRoute from "./helpers/protectedRoute";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Error404 from "./pages/error";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/home" component={Dashboard} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
