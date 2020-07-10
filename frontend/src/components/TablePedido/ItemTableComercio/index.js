import React from "react";
import { Link } from "react-router-dom";

import "../styles.css";

const ItemTableComercio = ({ nome, status, preco, id, data }) => {
  const dataFormatada = `${data.split("-")[2].split("T")[0]}/${
    data.split("-")[1]
  }/${data.split("-")[0]}`;
  return (
    <tr className="linha-pedido">
      <td>
        <span className="card-title span-card-title">{nome}</span>
      </td>
      <td>
        <span className="preco-pedido">
          {preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </td>
      <td>{status}</td>
      <td>{dataFormatada}</td>
      <td>
        <Link to={`/dados/pedido/${id}`}>DETALHES</Link>
      </td>
    </tr>
  );
};

export default ItemTableComercio;
