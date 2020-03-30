import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function SearchBar() {
  return (
    <div className="search">
      <i className="search__magnifier">
        <FontAwesomeIcon icon={faSearch} />
      </i>
      <input type="text" className="search__input" />
    </div>
  );
}
