import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Product from "./components/Product";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/products/:n"} component={Catalog} />
      <Route path={"/product/:id"} component={Product} />
    </Switch>
  );
}
