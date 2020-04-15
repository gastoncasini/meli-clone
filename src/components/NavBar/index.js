import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../components/SearchBar";
import "./styles.css";

export default function NavBar() {
  return (
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
  );
}

export function NavBarWithTitle({ title }) {
  return (
    <nav className="nav-bar nav-bar--wt-title">
      <NavLink to="/" className="nav-bar__link ">
        <i className="nav-bar__icon nav-bar__icon--logo">
          <FontAwesomeIcon icon="handshake" />
        </i>
      </NavLink>
      <h1>{title}</h1>
      <NavLink to="/checkout" className="nav-bar__link">
        <i className="nav-bar__icon">
          <FontAwesomeIcon icon="shopping-cart" />
        </i>
      </NavLink>
    </nav>
  );
}
