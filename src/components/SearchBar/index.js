import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

export default function SearchBar() {
  return (
    <div className="search">
      <i className="search__magnifier">
        <FontAwesomeIcon icon="search" />
      </i>
      <input type="text" className="search__input" />
    </div>
  );
}
