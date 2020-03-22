import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Catalog from "./components/Catalog";
import Product from "./components/Product";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/products/:n"} component={Catalog} />
      <Route path={"/product/:id"} component={Product} />
    </Switch>
  );
}
