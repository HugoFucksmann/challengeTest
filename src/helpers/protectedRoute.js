import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { token } from "../helpers/auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({})
  
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token") || "";
      await fetch(`${process.env.REACT_APP_URL}/login/verify`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then(({ verify }) => {
          console.log("res ", verify);
          setData(verify);
          setLoading(false);
        });
    })();
  },[])
  console.log(data);
  if(loading) return <p>Loading...</p>
  return (
    <Route
      {...rest}

      render={(props) => {
        if (data) {
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
