import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <>
      <main>
        <nav className="nav-bar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products/1">Products</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
        <Routes />
      </main>
      <footer className="footer">clon meli @gaston casini</footer>
    </>
  );
}

export default App;
