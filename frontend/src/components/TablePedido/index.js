import React, { useEffect, useState, useCallback } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import {
  listarPedidosComercio,
  listarPedidosCliente,
} from "../../services/pedido";

import ItemTableComercio from "./ItemTableComercio";
import ItemTableCliente from "./ItemTableCliente";

import "./styles.css";

const TablePedido = ({ id, tipoUsuario }) => {
  const [pedidos, setPedidos] = useState([]);

  const getPedidosComercio = useCallback(async () => {
    const data = await listarPedidosComercio(id);
    setPedidos(data);
  }, [id]);

  const getPedidosCliente = useCallback(async () => {
    const data = await listarPedidosCliente(id);
    setPedidos(data);
  }, [id]);

  useEffect(() => {
    if (tipoUsuario === "comercio") {
      getPedidosComercio();
      return;
    }

    getPedidosCliente();
  }, [getPedidosCliente, getPedidosComercio, tipoUsuario]);

  useEffect(() => {
    (async function () {
      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "bottom",
      });
    })();
  }, []);

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
            ? pedidos.map((pedido) => (
                <ItemTableComercio
                  key={pedido.id}
                  idComercio={pedido.idComercio}
                  titulo={pedido.nome}
                  url={pedido.url}
                  descricao={pedido.descricao}
                  preco={pedido.preco}
                />
              ))
            : pedidos.map((pedido) => (
                <ItemTableCliente
                  key={pedido.id}
                  titulo={pedido.nome}
                  url={pedido.url}
                  descricao={pedido.descricao}
                  preco={pedido.preco}
                />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default TablePedido;
