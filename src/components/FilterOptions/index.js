import React, { useState } from "react";
import { connect } from "react-redux";
import { addFilterAction } from "../../redux/productsDuck";
import "./styles.css";

function FilterOptions({
  optionLists,
  openFilter,
  filterCriteria,
  addFilterAction,
}) {
  // only for mobile interactions
  let togglableItems = {};
  let filterSubList = filterCriteria.filter((item) => Array.isArray(item));
  if (filterSubList) {
    filterSubList.forEach((sublist) => {
      togglableItems[sublist[0]] = "inactive";
    });
  }

  let [optionState, setOptionState] = useState(togglableItems);
  function toggleOption(e) {
    let id = e.target.id ? e.target.id : e.target.parentElement.id;
    if (id) {
      let newState = { ...optionState };
      newState[id] = newState[id] === "active" ? "inactive" : "active";
      setOptionState(newState);
    }
  }

  function toggleOptionClass(option) {
    return `filter__option-list filter__option-list--${optionState[option]} `;
  }

  function toggleFilter(openFilter) {
    return `filter ${openFilter ? "filter--active" : ""} `;
  }

  // add Filter criteria to redux store state
  function addFilter(e) {
    let filterText = e.target.innerHTML;
    let filterType = e.target.id
      ? e.target.id
      : e.target.parentNode.parentNode.id;

    if (filterType) {
      let filter = {
        filterText,
        filterType,
      };

      addFilterAction(filter);
    }
  }

  // sub components

  function ListItem({ text }) {
    return (
      <li className="filter__options__item" onClick={addFilter} id={text}>
        {text}
      </li>
    );
  }

  function ListItemWithSubList({ title, items }) {
    return (
      <li className="filter__options__item" onClick={toggleOption} id={title}>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          {title}
        </p>

        <ul className={toggleOptionClass(title)} onClick={addFilter}>
          {items.map((item) => (
            <li className="filter__option-list__item">{item}</li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <div className={toggleFilter(openFilter)}>
      <header className="filter__header">
        <h1> Filtrar por: </h1>
      </header>

      <ul className="filter__options">
        <ListItem text={filterCriteria[0]} />

        <ListItemWithSubList
          title={filterCriteria[1][0]}
          items={filterCriteria[1][1]}
        />
        <ListItemWithSubList
          title={filterCriteria[2][0]}
          items={filterCriteria[2][1]}
        />
        <ListItemWithSubList
          title={filterCriteria[3][0]}
          items={filterCriteria[3][1]}
        />
      </ul>
    </div>
  );
}

function mapStateToProps({ products }) {
  return { filterCriteria: products.filterCriteria };
}

export default connect(mapStateToProps, { addFilterAction })(FilterOptions);
