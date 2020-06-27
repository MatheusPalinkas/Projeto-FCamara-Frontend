import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import api from "../../services/Api";
import "./styles.css";
import ItemTableComercio from "./ItemTableComercio";
import ItemTableCliente from "./ItemTableCliente";

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
