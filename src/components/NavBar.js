import React from "react";
import { Link, Route } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Account from './Account';

function NavBar({ userLoggedIn, handleAuth }) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {userLoggedIn ? (
          <div>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/"
                onClick={() => {
                  localStorage.removeItem("token");
                  alert("Successfully logged out");
                  handleAuth();
                }}
              >
                Logout
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        )}
      </ul>

      <Route path="/" component={Home} exact></Route>
      <Route path="/account" component={Account}></Route>
      <Route path="/register" component={Register} exact></Route>
      <Route
        path="/login"
        render={props => {
          return <Login {...props} handleAuth={handleAuth}></Login>;
        }}
        exact
      ></Route>
    </div>
  );
}

export default NavBar;
