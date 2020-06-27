import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import api from "../../services/Api";

import "./styles.css";

const ItemTableComercio = (
  nome,
  descricao,
  status,
  preco = 200,
  idVendedor = null,
  idComercio = null,
  data
) => {
  return (
    <tr className="linha-pedido">
      <td>
        <span className="card-title span-card-title">Nome do comprador</span>
      </td>
      <td>
        <span className="preco-pedido">
          {preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </td>
      <td>Status</td>
      <td>Data</td>
      <td>
        <Link to={`/dados/pedido/${idComercio}`}>DETALHES</Link>
      </td>
    </tr>
  );
};

const ItemTableCliente = (
  nome,
  descricao,
  status,
  preco = 300,
  idCliente = null,
  data
) => {
  return (
    <tr className="linha-pedido">
      <td>
        <span className="card-title span-card-title">Nome Do comercio</span>
      </td>
      <td>
        <span className="preco-pedido">
          {preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </td>
      <td>Status</td>
      <td>Data</td>
      <td>
        <Link to={"#"}>DETALHES</Link>
      </td>
    </tr>
  );
};

const TablePedido = ({ idComercio, tipoUsuario, idCliente }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    (async function () {
      let filtro = "";

      if (idComercio) filtro = `?idComercio=${idComercio}`;

      const { data } = await api.get(`/produtos${filtro}`);
      setProdutos(data);

      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "bottom",
      });
    })();
  }, [idComercio]);

  return (
    <>
      <table className="responsive-table">
        <thead className="cabecalho-table">
          <tr>
            <th>
              Nome do {tipoUsuario === "comercio" ? "comprador" : "comercio"}
            </th>
            <th>Preço</th>
            <th>Status</th>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {tipoUsuario === "comercio"
            ? produtos.map((produto) => (
                <ItemTableComercio
                  key={produto.id}
                  idComercio={produto.idComercio}
                  titulo={produto.nome}
                  url={produto.url}
                  descricao={produto.descricao}
                  preco={produto.preco}
                />
              ))
            : produtos.map((produto) => (
                <ItemTableCliente
                  key={produto.id}
                  titulo={produto.nome}
                  url={produto.url}
                  descricao={produto.descricao}
                  preco={produto.preco}
                />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default TablePedido;
