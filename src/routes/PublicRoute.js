import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth.uid);

  const isAuthenticated = !!auth; //  !!undefined --> false || !!true --> true

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated && props.match.path !== "/read/:id" ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
