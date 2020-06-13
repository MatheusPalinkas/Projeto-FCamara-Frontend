import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import pages
import Main from "./pages/Main";
import Cadastro from "./pages/Cadastro";
import NotFound from "./pages/NotFound";

import Menu from "./components/Menu";

export default function Routes() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/home/:idCategoria" component={Main} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
