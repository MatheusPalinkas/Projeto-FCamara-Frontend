import React, { useEffect } from "react";
import { MdShoppingCart, MdClose, MdEdit } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import "./styles.css";
import ModalEstoque from "../../components/ModalEstoque";

const handleSubmit = (values) => alert(JSON.stringify(values));
const initialValues = {};

const ButtonEditarProduto = () => (
  <div
    className="tooltipped div-editar-produto"
    data-position="top"
    data-tooltip="Editar produto"
  >
    <a className="waves-effect waves-light  modal-trigger" href="#modal2">
      <MdEdit className="editar-produto " />
    </a>
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

const Card = ({
  url,
  titulo,
  descricao,
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
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light div-card-imagem">
          <img
            className="activator"
            src={url}
            alt="Foto ilustrativa do produto"
          />
        </div>
        <div className="card-content">
          <span className="card-title span-card-title">
            {titulo}
            {!idComercio && (
              <>
                {!idVendedor ? <ButtonAddCarrinho /> : <ButtonEditarProduto />}
              </>
            )}
          </span>
          {produto.preco && (
            <span className="preco">
              {produto.preco.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          )}
          <p className="p-descricao-link">
            {idVendedor && (
              <Link to={""} className="excluir-produto">
                Excluir produto
              </Link>
            )}
            {idComercio ? (
              <Link
                to={`/comercio/${idComercio}`}
                className="link-pagina-produto"
              >
                Pagina do comercio
              </Link>
            ) : (
              <span className="link activator descricao">Ver descrição</span>
            )}
          </p>
        </div>
        {!idComercio && (
          <div className="card-reveal infos-card">
            <span className="card-title activator span-card-title">
              {titulo}
              <MdClose className="activator card-title icon-menos-infos" />
            </span>
            <p className="p-descricao">{descricao}</p>
          </div>
        )}
      </div>
      <ModalEstoque handleSubmit={handleSubmit} initialValues={initialValues} />
    </>
  );
};

export default Card;
