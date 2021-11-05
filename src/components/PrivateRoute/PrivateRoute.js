import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

// private route setup
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  // spinner setup for each private route
  if (isLoading) {
    return (
      <div
        className="spinner-border text-dark"
        style={{ marginTop: "35vh" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
