import React from "react";
import { connect } from "react-redux";
import { selectItemAction } from "../../redux/productsDuck";
import { NavLink } from "react-router-dom";
import ProductCard from "../ProductCard";

function LinkCard({ id, selectItemAction, ...rest }) {
  function selectItem() {
    selectItemAction(id);
  }

  return (
    <NavLink to={`/product/${id}`} onClick={selectItem}>
      <ProductCard {...rest} />
    </NavLink>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { selectItemAction })(LinkCard);
