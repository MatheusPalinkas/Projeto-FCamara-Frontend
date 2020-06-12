import React, { useEffect } from "react";
import { MdShoppingCart, MdClose, MdEdit } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

import "./styles.css";

const ButtonEditarProduto = () => (
  <div
    className="tooltipped div-editar-produto"
    data-position="top"
    data-tooltip="Editar produto"
  >
    <MdEdit className="editar-produto" />
  </div>
);
const ButtonAddCarrinho = () => (
  <div
    className="tooltipped div-add-carrinho"
    data-position="top"
    data-tooltip="adicionar ao carrinho"
  >
    <MdShoppingCart className="add-carrinho" />
  </div>
);

const Card = ({ url, titulo, descricao, produto = {}, idVendedor = null }) => {
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
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light div-card-imagem">
          <img className="activator" src={`${url}`} />
        </div>
        <div className="card-content">
          <span className="card-title span-card-title">
            {titulo}
            {!idVendedor ? <ButtonAddCarrinho /> : <ButtonEditarProduto />}
          </span>
          {produto.preco && <span className="preco">{produto.preco}</span>}
          <p className="p-descricao-link">
            {idVendedor && (
              <Link className="activator excluir-produto">Excluir produto</Link>
            )}
            <Link className="activator descricao">Ver descrição</Link>
          </p>
        </div>
        <div className="card-reveal infos-card">
          <span className="card-title activator span-card-title">
            Notebook
            <MdClose className="activator  icon-menos-infos" />
          </span>
          <p className="p-descricao">{descricao}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
