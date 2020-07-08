import React, { useEffect } from "react";
import api from "../../services/Api";

import { MdClose, MdEdit } from "react-icons/md";

import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

import ModalEstoque from "../../components/ModalEstoque";
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

const Card = ({
  id,
  url,
  titulo,
  descricao,
  produto = {},
  idVendedor = null,
  idComercio = null,
  quantidade,
  quantidadeEstoque,
  curtido,
  handleUpdate,
  produtoDemanda,
  produtoEstoque,
}) => {
  const converterStatus = () => {
    if (produtoEstoque) {
      const status = "Disponivel";

      const initialValues = {
        status: status,
        quantidade: quantidadeEstoque,
      };
      return initialValues;
    } else {
      const status = "Indisponivel";
      const initialValues = {
        status: status,
        quantidade: quantidadeEstoque,
      };

      return initialValues;
    }
  };

  useEffect(() => {
    (async function () {
      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "bottom",
      });
    })();
  }, []);

  const deleteProduto = async () => {
    const data = await api.delete(`/produto/${id}`, { id });
    handleUpdate();
  };

  const ButtonEditarProduto = () => {
    return (
      <div
        className="tooltipped div-editar-produto"
        data-position="top"
        data-tooltip="Editar produto"
      >
        <a
          className="waves-effect waves-light  modal-trigger"
          href={`#modal${id}`}
        >
          <MdEdit className="editar-produto " />
        </a>
      </div>
    );
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
              {produtoEstoque ? (
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
                    <ButtonEditarProduto quantidade={quantidade} />
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
                <span className="link activator descricao">
                  {!produtoDemanda ? "Ver descrição" : "Mais informações"}
                </span>
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
      <ModalEstoque
        produtoDemanda={produtoDemanda}
        produtoEstoque={produtoEstoque}
        initialValues={converterStatus()}
        id={id}
      />
    </>
  );
};

export default Card;
