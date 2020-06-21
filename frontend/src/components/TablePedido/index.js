import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import api from "../../services/Api";

import "./styles.css";

const ItemTable = (
  nome,
  descricao,
  status,
  preco = 0,
  idVendedor = null,
  idComercio = null
) => {
  return (
    <tr className="linha-pedido">
      <td>
        <span className="card-title span-card-title">Nome</span>
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
      <td>
        <Link to={`/dados/pedido/${idComercio}`}>DETALHES</Link>
      </td>
    </tr>
  );
};

const TablePedido = ({ idComercio }) => {
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
            <th>Nome do comprador</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <ItemTable
              key={produto.id}
              idVendedor={produto.idComercio}
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
