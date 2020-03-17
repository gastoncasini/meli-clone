import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <main>
      <nav className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products/1">Products</NavLink>
      </nav>
      <Routes />
    </main>
  );
}

export default App;
