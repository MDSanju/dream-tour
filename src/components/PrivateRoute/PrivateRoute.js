import React from "react";
import { Redirect, Route } from "react-router";
import { HashLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";

// private route setup
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  // spinner setup for each private route
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "35vh",
        }}
      >
        <HashLoader color={"#140b5c"} size={60} />
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
