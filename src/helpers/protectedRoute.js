import React, { } from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    console.log(Auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.authenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;