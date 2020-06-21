import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import pages
import Main from "./pages/Main";
import Cadastro from "./pages/Cadastro";
import NotFound from "./pages/NotFound";
import ProdutosVendedor from "./pages/ProdutosVendedor";
import ProdutosComercio from "./pages/ProdutosComercio";
import NovoProduto from "./pages/NovoProduto";
import PedidosVendedor from "./pages/PedidosVendedor";
import DadosPedido from "./pages/DadosPedido";
import MinhaConta from "./pages/MinhaConta";

import Menu from "./components/Menu";

export default function Routes() {
  return (
    <BrowserRouter>
      <Menu user={{ idComercio: 1, id: 2 }} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/home/:idCategoria" component={Main} />

        <Route exact path="/cadastro" component={Cadastro} />

        <Route
          exact
          path="/produto/vendedor/:idComercio"
          component={ProdutosVendedor}
        />
        <Route
          exact
          path="/comercio/:idComercio"
          component={ProdutosComercio}
        />
        <Route exact path="/novo/produto/:idComercio" component={NovoProduto} />

        <Route
          exact
          path="/pedidos/vendedor/:idComercio"
          component={PedidosVendedor}
        />
        <Route exact path="/comercio/:idComercio" component={PedidosVendedor} />

        <Route exact path="/dados/pedido/:idComercio" component={DadosPedido} />
        <Route exact path="/comercio/:idComercio" component={DadosPedido} />

        <Route exact path="/editar/conta" component={MinhaConta} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
