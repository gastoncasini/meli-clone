import React from "react";
import { NavBarWithTitle } from "../../components/NavBar";
import MultipeStepCheckout from "../../components/MultipleStepCheckout";

export default function ShoppingCart() {
  return (
    <>
      <NavBarWithTitle title="carrito" />
      <MultipeStepCheckout />
    </>
  );
}
