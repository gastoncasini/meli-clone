import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHandshake,
  faLock,
  faSearch,
  faTimes,
  faCheck,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Routes from "./Routes";
import SearchBar from "./components/SearchBar";
import "./App.css";

// init Icon Library
library.add(
  faShoppingCart,
  faHandshake,
  faLock,
  faSearch,
  faTimes,
  faCheck,
  faSpinner
);

function App({ loggedIn }) {
  return (
    <>
      <main>
        <nav className="nav-bar">
          <NavLink to="/" className="nav-bar__link ">
            <i className="nav-bar__icon nav-bar__icon--logo">
              <FontAwesomeIcon icon="handshake" />
            </i>
          </NavLink>
          <SearchBar />
          <NavLink to="/checkout" className="nav-bar__link">
            <i className="nav-bar__icon">
              <FontAwesomeIcon icon="shopping-cart" />
            </i>
          </NavLink>
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
    user: user.user,
  };
}

export default connect(mapStateToProps)(App);
