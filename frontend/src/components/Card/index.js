import React, { useEffect } from "react";
import api from "../../services/Api";

import { MdClose, MdEdit } from "react-icons/md";

import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

import ButtonAddCarrinho from "./ButtonAddCarrinho";
import BtnFavoritar from "./BtnFavoritar";

import "./styles.css";

const QuantidadeProduto = ({ quantidade }) => (
  <div
    className="tooltipped div-quantidade-carrinho"
    data-position="top"
    data-tooltip="Quantidade comprada"
  >
    <p className="qtd-produto">{quantidade}</p>
  </div>
);

const ButtonEditarProduto = ({ handleEdit }) => {
  return (
    <div
      className="tooltipped div-editar-produto"
      data-position="top"
      data-tooltip="Editar produto"
      onClick={(e) => {
        e.preventDefault();
        handleEdit();
      }}
    >
      <span className="waves-effect waves-light link">
        <MdEdit className="editar-produto " />
      </span>
    </div>
  );
};

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
  handleUpdate,
  handleEdit,
  produtoDemanda,
  disponivel,
}) => {
  useEffect(() => {
    (async function () {
      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "bottom",
      });
    })();
  }, []);

  const deleteProduto = async () => {
    await api.delete(`/produto/${id}`, { id });
    handleUpdate();
  };

  return (
    <>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light div-card-imagem">
          <img
            className={`activator ${!url && "sem-imagem"}`}
            src={url}
            alt="Sem foto ilustrativa"
          />
          {idComercio === null && (
            <>
              {disponivel ? (
                <label className="labelDisponivel">Disponivel</label>
              ) : (
                <label className="labelIndisponivel">Indisponivel</label>
              )}
            </>
          )}
        </div>
        <div className="card-content">
          <span className="card-title span-card-title">
            {titulo}
            {curtido ? (
              <BtnFavoritar />
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
                    <ButtonEditarProduto handleEdit={handleEdit} />
                  )}
                </>
              )
            )}
          </span>
          {produto.preco && (
            <>
              <span className="preco">
                {produto.preco.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </>
          )}

          <p className="p-descricao-link">
            {idVendedor && (
              <span className="link excluir-produto" onClick={deleteProduto}>
                Excluir produto
              </span>
            )}
            {idComercio ? (
              <Link
                to={`/comercio/${idComercio}`}
                className="link-pagina-produto"
              >
                Pagina do comercio
              </Link>
            ) : (
              <>
                <span className="link activator descricao">Ver descrição</span>
              </>
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
            {produtoDemanda ? (
              <label className="label-demanda">Produto por encomenda</label>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
