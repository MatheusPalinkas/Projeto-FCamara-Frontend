import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import pages
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import ProdutosVendedor from "./pages/ProdutosVendedor";

import Menu from "./components/Menu";

/**        <Route exact path="/:idCategoria" component={Main} /> */

export default function Routes() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/produtovendedor" component={ProdutosVendedor} />
        <Route exact path="/:idCategoria" component={ProdutosVendedor} />

        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
