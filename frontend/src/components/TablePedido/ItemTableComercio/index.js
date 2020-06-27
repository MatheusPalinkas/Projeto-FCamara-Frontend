import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

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

export default ItemTableComercio;
