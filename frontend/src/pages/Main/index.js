import React from "react";

import Card from "../../components/Card";

import "./styles.css";

const url =
  "https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

function Main() {
  return (
    <div class="container-main">
      <Card
        titulo="Van"
        descricao="Uma nav"
        produto={{ preco: 20.5 }}
        url={url}
      />
      <Card
        titulo="Van"
        descricao="Uma nav"
        produto={{ preco: 20.5 }}
        url={url}
        idVendedor={2}
      />
      <Card titulo="Van2" descricao="Uma nav" url={url} />
    </div>
  );
}
export default Main;
