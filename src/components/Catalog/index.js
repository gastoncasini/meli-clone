import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchProductsAction } from "../../redux/productsDuck";
import LinkCard from "../LinkCard";
import Pagination from "../Pagination";
import "./styles.css";

function renderProducts(prods) {
  return prods.map((prod) => {
    return <LinkCard {...prod} />;
  });
}

function Catalog({ products, fetching, fetchProductsAction }) {
  function fetchProducts() {
    fetchProductsAction(5);
  }

  useEffect(() => {
    fetchProductsAction(5);
  }, []);

  if (fetching || !products) {
    return <h1>...CARGANDO</h1>;
  }

  return (
    <div className="catalog">
      <h2>Products</h2>
      {renderProducts(products)}

      <button className={"btn-fetch"} onClick={fetchProducts}>
        Load more
      </button>
    </div>
  );
}

function mapStateToProps({ products }) {
  return {
    fetching: products.fetching,
    products: products.productsList
  };
}

export default connect(mapStateToProps, { fetchProductsAction })(Catalog);
