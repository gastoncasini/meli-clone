import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route paht={"/catalog"} component={Catalog} />
    </Switch>
  );
}
