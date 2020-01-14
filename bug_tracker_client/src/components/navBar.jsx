import React from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../services/authService";

const NavBar = () => {
  const user = auth.getCurrentUser();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand text-white" to="/">
        {/* <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""> */}
        MaziCode
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            {user && (
              <NavLink className="nav-link text-white" to="/ticket">
                Add a bug ...
              </NavLink>
            )}
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/profile">
                  {user.name}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/logout">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/register">
                  Register
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
