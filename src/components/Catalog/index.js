import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchProductsAction } from "../../redux/productsDuck";
import LinkCard from "../LinkCard";
import "./styles.css";

function renderProducts(prods) {
  return prods.map((prod, i) => {
    return <LinkCard {...prod} key={i} />;
  });
}

function Catalog({ products, fetching, fetchProductsAction }) {
  function fetchProducts() {
    fetchProductsAction(5);
  }

  useEffect(() => {
    console.log(products);
    if (!products.productsList) {
      fetchProductsAction(5);
    }
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
