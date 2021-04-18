import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../Contexts/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
}

export default PrivateRoute;
