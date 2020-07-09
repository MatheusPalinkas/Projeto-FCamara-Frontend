import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { MdStore, MdReply } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";

import ModalFinalizarCompra from "../../components/ModalFinalizarCompra";
import ModalObservacao from "./ModalObservacao";
import Button from "../../components/Button";
import ItemCarrinho from "./ItemCarrinho";

import "./styles.css";

function CarrinhoCompras({ produtos, user, total }) {
  const [itemSelected, setItemSelected] = useState(0);
  const [observacoes, setObservacoes] = useState("");
  const { goBack } = useHistory();

  const handleFinish = (e) => {
    e.preventDefault();

    if (!user.id) {
      const btnEntrarLogin = document.querySelector("#btn-login-entrar");
      btnEntrarLogin.click();
      return;
    }

    if (total <= 0) {
      alert("Sem itens no carrinho");
      return;
    }

    const elem = document.querySelector("#modal-finalizar-compra");
    const instance = M.Modal.getInstance(elem);
    instance.open();
  };

  return (
    <>
      <div className="div-container div-carrinho-compras">
        <div className="card-panel div-card-panel-carrinho">
          <ul className="collection with-header items-carrinho">
            <li className="collection-header">
              <div>
                <h4>Meus items</h4>
                <div className="li-cabecalho-headers">
                  <span className="carrinho-nome-produto">Nome</span>
                  <span>Quantidade</span>
                  <span>Preço</span>
                  <span className="carrinho-subtotal-produto">Subtotal</span>
                </div>
              </div>
            </li>
            {produtos.map((produto) => (
              <ItemCarrinho
                produto={produto}
                key={produto.id}
                handleComment={(observacoes) => {
                  setItemSelected(produto.id);
                  setObservacoes(produto.observacao);
                }}
              />
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
              onClick={(e) => handleFinish(e)}
            />
          </div>
        </div>
      </div>
      <ModalFinalizarCompra />
      <ModalObservacao itemSelected={itemSelected} observacoes={observacoes} />
    </>
  );
}
const mapStateToProps = (state) => ({
  produtos: state.carrinho.items,
  total: state.carrinho.total,
  user: state.user,
});

export default connect(mapStateToProps)(CarrinhoCompras);
