import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

// Header Top Navbar with bootstrap
const Header = () => {
  const { user, admin, logout } = useAuth();
  return (
    <div className="header-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark header-navbar">
        <div className="container-fluid">
          <span
            className="navbar-brand fw-bold mx-4 fs-4"
            style={{ cursor: "pointer" }}
          >
            Dream Tour
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-link-custom"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "white" }}
                aria-current="page"
                to="/home"
                style={{ fontWeight: "500" }}
              >
                Home
              </NavLink>
              {admin && (
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/add/service"
                  style={{ fontWeight: "500" }}
                >
                  Add A New Service
                </NavLink>
              )}
              {admin ? (
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/manageAllOrders"
                  style={{ fontWeight: "500" }}
                >
                  Manage All Orders
                </NavLink>
              ) : (
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/myOrders"
                  style={{ fontWeight: "500" }}
                >
                  My Orders
                </NavLink>
              )}
              {admin ? (
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/makeAdmin"
                  style={{ fontWeight: "500" }}
                >
                  Make Admin
                </NavLink>
              ) : (
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/contactUs"
                  style={{ fontWeight: "500" }}
                >
                  Contact Us
                </NavLink>
              )}
              {user.email && (
                <span
                  className="navbar-text"
                  style={{
                    color: "white",
                    fontWeight: "600",
                    marginLeft: "30px",
                    borderBottom: "2px solid white",
                    cursor: "pointer",
                  }}
                >
                  Active User:
                  <span
                    className="navbar-text"
                    style={{
                      backgroundColor: "hsla(0, 0%, 100%, .1)",
                      color: "white",
                      fontWeight: "600",
                      marginLeft: "8px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {user.displayName}
                  </span>
                </span>
              )}
              {user.email ? (
                <button onClick={logout} className="btn btn-outline-light">
                  Logout
                </button>
              ) : (
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                  to="/login"
                  style={{ fontWeight: "500" }}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
