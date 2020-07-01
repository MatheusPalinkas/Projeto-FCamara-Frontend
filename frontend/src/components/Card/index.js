import React, { useEffect } from "react";

import { MdClose, MdEdit } from "react-icons/md";

import { IoIosHeartDislike } from "react-icons/io";

import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

import ModalEstoque from "../../components/ModalEstoque";
import ButtonAddCarrinho from "./ButtonAddCarrinho";

import "./styles.css";

const handleSubmit = (values) => alert(JSON.stringify(values));
const initialValues = { quantidade: "105", status: "Indisponivel" };

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

const QuantidadeProduto = ({ quantidade }) => (
  <div
    className="tooltipped div-quantidade-carrinho"
    data-position="top"
    data-tooltip="Quantidade comprada"
  >
    <p className="qtd-produto">{quantidade}</p>
  </div>
);

const Curtido = () => (
  <div
    className="tooltipped div-add-carrinho"
    data-position="top"
    data-tooltip="Descurtir comercio"
  >
    <IoIosHeartDislike className="produtoCurtido" />
  </div>
);

const Card = ({
  id,
  url,
  titulo,
  descricao,
  produto = {},
  idVendedor = null,
  idComercio = null,
  quantidade,
  curtido,
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
            {curtido ? (
              <Curtido />
            ) : !!quantidade ? (
              <>
                <QuantidadeProduto quantidade={quantidade} />
              </>
            ) : (
              !idComercio && (
                <>
                  {!idVendedor ? (
                    <ButtonAddCarrinho
                      item={{
                        id,
                        url,
                        nome: titulo,
                        descricao,
                        preco: produto.preco,
                        quantidade,
                      }}
                    />
                  ) : (
                    <ButtonEditarProduto />
                  )}
                </>
              )
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
              <span className="link excluir-produto">Excluir produto</span>
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
