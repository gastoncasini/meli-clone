import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/checkout"} component={ShoppingCart} />
      <Route path={"/login"} component={Login} />
      <Route path={"/products/:n"} component={Catalog} />
      <Route path={"/product/:id"} component={Product} />
    </Switch>
  );
}
