import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchProductsAction } from "../../redux/productsDuck";
import LinkCard from "../LinkCard";
import Pagination from "../Pagination";

function renderProducts(prods) {
  return prods.map(prod => {
    return <LinkCard {...prod} />;
  });
}

function Catalog({ products, fetching, fetchProductsAction }) {
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

      <Pagination />
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
