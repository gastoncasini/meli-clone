import React from "react";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
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
