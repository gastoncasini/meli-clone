import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavLink } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <main>
      <nav className="nav-bar">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>
      </nav>
      <Routes />
    </main>
  );
}

export default App;
