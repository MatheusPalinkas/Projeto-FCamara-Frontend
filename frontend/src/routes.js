import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import pages
import Main from "./pages/Main";
import Cadastro from "./pages/Cadastro";
import NotFound from "./pages/NotFound";
import ProdutosVendedor from "./pages/ProdutosVendedor";
import ProdutosComercio from "./pages/ProdutosComercio";
import NovoProduto from "./pages/NovoProduto";
import Pedidos from "./pages/Pedidos";
import DetalhesPedido from "./pages/DetalhesPedido";
import MinhaConta from "./pages/MinhaConta";
import CarrinhoCompras from "./pages/CarrinhoCompras";

import Menu from "./components/Menu";

export default function Routes() {
  return (
    <BrowserRouter>
      <Menu />
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

        <Route exact path="/pedidos/:tipoUsuario/:id" component={Pedidos} />

        <Route
          exact
          path="/dados/pedido/:idComercio"
          component={DetalhesPedido}
        />

        <Route exact path="/editar/conta" component={MinhaConta} />
        <Route exact path="/carrinho" component={CarrinhoCompras} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
