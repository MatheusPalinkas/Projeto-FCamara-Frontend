import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

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
        <Link to={"/dados/cliente/1"}>DETALHES</Link>
      </td>
    </tr>
  );
};
export default ItemTableCliente;
