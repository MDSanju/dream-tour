import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

// Website login route
const Login = () => {
  const { signInUsingGoogle } = useAuth();
  // fixed the redirect url issue
  const location = useLocation();
  
  
  const redirectUriHistory = useHistory();

  // website login with Google Authentication
  const handleGoogleLogin = () => {
    signInUsingGoogle(location, redirectUriHistory);
  };

  return (
    <div style={{ marginTop: "75px" }}>
      <h1
        className="add-font-family"
        style={{ fontSize: "3rem", textAlign: "center" }}
      >
        Please Sign In!
      </h1>
      <div className="sign-in-page">
        <img
          className="login-page-image"
          src="https://theupay.com/bank/Assets/login.jpg"
          alt=""
        />
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
    </div>
  );
};

export default Login;
