import React, { useState } from "react";
import "./styles.css";

export default function FilterOptions({ optionLists, openFilter }) {
  let initialState = {
    option1: "inactive",
    option2: "inactive",
    option3: "inactive",
  };

  optionLists = optionLists ? optionLists : initialState;

  let [optionState, setOptionState] = useState(initialState);

  function toggleOption(e) {
    let id = e.target.id ? e.target.id : e.target.parentElement.id;
    if (id) {
      let newState = { ...optionState };
      newState[id] = newState[id] === "active" ? "inactive" : "active";
      setOptionState(newState);
    }

    console.log(id, e.target.parentElement.id);
  }

  function toggleOptionClass(option) {
    return `filter__option-list filter__option-list--${optionState[option]} `;
  }

  function toggleFilter(openFilter) {
    return `filter ${openFilter ? "filter--active" : ""} `;
  }

  return (
    <div className={toggleFilter(openFilter)}>
      <header className="filter__header">
        <h1> Filtrar por: </h1>
      </header>

      <ul className="filter__options">
        <li className="filter__options__item">envio gratis</li>
        <li className="filter__options__item">envio caro</li>
        <li
          className="filter__options__item"
          onClick={toggleOption}
          id="option1"
        >
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            ciudad
          </p>

          <ul className={toggleOptionClass("option1")}>
            <li className="filter__option-list__item">barrio 1</li>
            <li className="filter__option-list__item">barrio 2</li>
            <li className="filter__option-list__item">barrio 3 </li>
          </ul>
        </li>
        <li
          className="filter__options__item"
          onClick={toggleOption}
          id="option2"
        >
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            ciudad
          </p>
          <ul className={toggleOptionClass("option2")}>
            <li className="filter__option-list__item">barrio 1</li>
            <li className="filter__option-list__item">barrio 2</li>
            <li className="filter__option-list__item">barrio 3 </li>
          </ul>
        </li>
        <li
          className="filter__options__item"
          onClick={toggleOption}
          id="option3"
        >
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            ciudad
          </p>
          <ul className={toggleOptionClass("option3")}>
            <li className="filter__option-list__item">barrio 1</li>
            <li className="filter__option-list__item">barrio 2</li>
            <li className="filter__option-list__item">barrio 3 </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
