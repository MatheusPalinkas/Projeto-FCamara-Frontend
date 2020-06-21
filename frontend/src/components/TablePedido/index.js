import React, { useEffect } from "react";
import { MdShoppingCart, MdClose, MdEdit } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import "./styles.css";

const TablePedido = ({
  nome,
  descricao,
  status,
  produto = {},
  idVendedor = null,
  idComercio = null,
}) => {
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
      <tr>
        <td>
          <span className="card-title span-card-title">Nome</span>
        </td>
        <td>
          {produto.preco && (
            <span className="preco">
              {produto.preco.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          )}
        </td>
        <td>Status</td>
        <td>
          <Link to={`/dados/pedido/${idComercio}`}>Ver descricao</Link>
        </td>
      </tr>
    </>
  );
};

export default TablePedido;
