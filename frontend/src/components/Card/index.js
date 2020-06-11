import React, { useEffect } from "react";
import { MdShoppingCart, MdClose } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

import "./styles.css";

const Card = ({ url }) => {
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
            Notebook
            <div
              className="tooltipped div-add-carrinho"
              data-position="top"
              data-tooltip="adicionar ao carrinho"
            >
              <MdShoppingCart className="add-carrinho" />
            </div>
          </span>
          <p>
            <Link className="activator descricao">Ver descrição</Link>
          </p>
        </div>
        <div className="card-reveal infos-card">
          <span className="card-title activator span-card-title">
            Notebook
            <MdClose className="activator  icon-menos-infos" />
          </span>
          <p className="p-descricao">
            Aqui temos um notbook com o melhor sistema operacional vulgo
            Elementary OS (feito a base do ubuntu)
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
