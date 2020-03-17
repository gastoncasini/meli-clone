import React from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function LinkCard(props) {
  return (
    <NavLink to={"/product/id"}>
      <ProductCard {...props} />
    </NavLink>
  );
}
