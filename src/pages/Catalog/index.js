import React from "react";
import ProductList from "../../components/ProductList";
import NavBar from "../../components/NavBar";
import "./styles.css";

export default function Catalog() {
  return (
    <>
      <NavBar />

      <section className="catalog">
        <aside className="catalog__filter">
          <h2 className="catalog__title">Products</h2>
        </aside>
        <ProductList />
      </section>
    </>
  );
}
