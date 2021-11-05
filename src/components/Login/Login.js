import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

// Website login route
const Login = () => {
  const { signInUsingGoogle } = useAuth();
  // fixed the redirect url issue
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";

  // website login with Google Authentication
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
      })
      .then((error) => {
        history.push(redirect_url);
      })
      .finally(() => history.push(redirect_url));
  };

  return (
    <div style={{ marginTop: "75px" }}>
      <h2 className="mb-4">Please Sign In!</h2>
      <button onClick={handleGoogleLogin} className="google-login-btn">
        <img
          style={{
            width: "58px",
            height: "54px",
            marginLeft: "-5px",
            marginRight: "15px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuoKGScAHkMXYEpDAOr4y3zPJz3Kura9TesWte2ueTAIGdyeP5KVwq-0Q8BobSm-iaqs&usqp=CAU"
          alt=""
        />{" "}
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;