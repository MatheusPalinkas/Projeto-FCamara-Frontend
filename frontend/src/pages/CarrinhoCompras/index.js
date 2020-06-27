import React from "react";
import { useHistory } from "react-router-dom";
import { MdStore, MdReply } from "react-icons/md";

import Button from "../../components/Button";

import "./styles.css";

function CarrinhoCompras() {
  const { goBack } = useHistory();

  return (
    <div className="div-container div-carrinho-compras">
      <div className="card-panel">
        <div className="div-btn-finalizar-compra">
          <Button
            text="Voltar"
            tooltip="Voltar"
            Icon={MdReply}
            position="bottom"
            typeButton="secundaria"
            className="btn-voltar-carrinho"
            onClick={(e) => {
              e.preventDefault();
              goBack();
            }}
          />
          <Button
            text="Finalizar"
            tooltip="Finalizar compra"
            Icon={MdStore}
            position="bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default CarrinhoCompras;
