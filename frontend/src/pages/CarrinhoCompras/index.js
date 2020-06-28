import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { MdStore, MdReply } from "react-icons/md";

import Button from "../../components/Button";
import ItemCarrinho from "./ItemCarrinho";

import "./styles.css";

function CarrinhoCompras({ produtos }) {
  const { goBack } = useHistory();

  return (
    <div className="div-container div-carrinho-compras">
      <div className="card-panel div-card-panel-carrinho">
        <ul className="collection with-header items-carrinho">
          <li class="collection-header">
            <h4>Meus items</h4>
          </li>
          {produtos.map((produto) => (
            <ItemCarrinho produto={produto} key={produto.id} />
          ))}
        </ul>
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
const mapStateToProps = (state) => ({ produtos: state.carrinho.items });

export default connect(mapStateToProps)(CarrinhoCompras);
