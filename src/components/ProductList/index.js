import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProductsAction } from "../../redux/productsDuck";
import LinkCard from "../LinkCard";
/* import "./styles.css";
 */
function renderProducts(prods) {
  return prods.map((prod, i) => {
    return (
      <li className="catalog__item">
        <LinkCard key={i} {...prod} />
      </li>
    );
  });
}

function ProductList({ products, fetching, fetchProductsAction }) {
  function fetchProducts() {
    fetchProductsAction(15);
  }

  useEffect(() => {
    if (!products[0]) {
      fetchProducts();
    }
  }, [products]);

  if (fetching || !products) {
    return <h1>...CARGANDO</h1>;
  }

  return <ul className="catalog__container">{renderProducts(products)}</ul>;
}

function mapStateToProps({ products }) {
  return {
    fetching: products.fetching,
    products: products.productsList,
  };
}

export default connect(mapStateToProps, { fetchProductsAction })(ProductList);
