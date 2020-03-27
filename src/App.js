import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

function App({ loggedIn }) {
  return (
    <>
      <main>
        <nav className="nav-bar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products/1">Products</NavLink>
          <NavLink to="/login">{loggedIn ? "logout" : "login"}</NavLink>
        </nav>
        <Routes />
      </main>
      <footer className="footer">clon meli @gaston casini</footer>
    </>
  );
}

function mapStateToProps({ user }) {
  return {
    error: user.error,
    loggedIn: user.loggedIn,
    user: user.user
  };
}

export default connect(mapStateToProps)(App);
