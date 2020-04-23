import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFilterAction } from "../../redux/productsDuck";
import ProductList from "../../components/ProductList";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import FilterOptions from "../../components/FilterOptions";
import "./styles.css";

function Catalog({ filters, removeFilterAction }) {
  let [filter, setFilter] = useState(false);
  filters = filters ? filters : ["criterio", "criterio", "criterio"];

  function removeFilter(e) {
    let selectedFilter = e.target.parentElement.childNodes[0].data;

    removeFilterAction(selectedFilter);
  }

  function renderFilters(filters) {
    return filters.map((item) => {
      return (
        <li className="catalog__search-criteria__item">
          {item.filterText}
          <Button
            innerHTML="x"
            className="button--close"
            clickHandler={removeFilter}
          />
        </li>
      );
    });
  }

  function toggleFilter() {
    setFilter(!filter);
  }

  function closeFilter(e) {
    if (e.target.innerHTML === "filtrar") {
      return;
    }

    // clicking on filter sublists wont close the menu
    // sublist and its parent has setted id atribute
    let id = e.target.id ? e.target.id : e.target.parentElement.id;
    if (id) {
      return;
    }
    setFilter(false);
  }

  return (
    <>
      <NavBar />

      <section className="catalog" onClick={closeFilter}>
        <aside className="catalog__filter">
          <header className="catalog__header">
            <h2> busqueda</h2>
            <div className="catalog__header__info">
              <div className="catalog__toggle-mobile-filter">
                <Button
                  innerHTML="filtrar"
                  className="button--cian-lighter button--medium button--right"
                  clickHandler={toggleFilter}
                />
              </div>
              <p> 15 resultados</p>
            </div>
          </header>
          <ul className="catalog__search-criteria">{renderFilters(filters)}</ul>

          <FilterOptions openFilter={filter} />
        </aside>
        <ProductList />
      </section>
    </>
  );
}

function mapStateToProps({ products }) {
  return { filters: products.filters };
}

export default connect(mapStateToProps, { removeFilterAction })(Catalog);
