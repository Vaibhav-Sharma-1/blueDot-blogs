import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth.uid);

  const isAuthenticated = !!auth; //  !!undefined --> false || !!true --> true

  return (
    <div>
      <Header />
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </div>
  );
};

export default PrivateRoute;
