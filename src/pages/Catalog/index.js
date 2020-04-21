import React, { useState } from "react";
import ProductList from "../../components/ProductList";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import FilterOptions from "../../components/FilterOptions";
import "./styles.css";

export default function Catalog({ filters }) {
  let [filter, setFilter] = useState(false);
  filters = filters ? filters : ["criterio", "criterio", "criterio"];

  function renderFilters(filters) {
    return filters.map((item) => {
      return (
        <li className="catalog__search-criteria__item">
          {item} <Button innerHTML="x" className="button--close" />
        </li>
      );
    });
  }

  function toggleFilter() {
    setFilter(!filter);
  }

  function closeFilter(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "filtrar") {
      return;
    }
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
