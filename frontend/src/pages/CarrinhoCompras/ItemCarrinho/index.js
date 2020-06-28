import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";
import {
  REMOVE_ITEM_CART,
  UPDATE_QUANTIDADE_ITEM_CART,
} from "../../../store/actions/carrinho";

import "./styles.css";

function ItemCarrinho({ produto, handleRemove, handleUpdateAmount }) {
  const [quantidade, setQuantidade] = useState(parseInt(produto.quantidade));
  const total = parseFloat(produto.preco) * parseInt(produto.quantidade);

  useEffect(() => {
    handleUpdateAmount(produto.id, quantidade);
  }, [quantidade]);

  return (
    <li className="collection-item avatar li-produto-carrinho">
      <img
        src={produto.url}
        alt="Foto demostrativa do produto"
        className="circle img-produto-carrinho"
      />

      <span className="carrinho-nome-produto">{produto.nome}</span>
      <div className="div-qtd-alterar-quantidade-carrinho">
        <button
          onClick={(e) => {
            e.preventDefault();
            setQuantidade(quantidade + 1);
          }}
        >
          <MdAdd color="#FFF" />
        </button>
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(parseInt(e.target.value))}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (quantidade === 1) return;
            setQuantidade(quantidade - 1);
          }}
        >
          <MdRemove color="#FFF" />
        </button>
      </div>
      <span className="carrinho-preco-produto">
        {produto.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <span className="carrinho-preco-produto">
        {total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>

      <MdDelete
        color="#e74c3c"
        size={24}
        className="secondary-conten btn-deletar-item-produto"
        onClick={(e) => {
          e.preventDefault();
          console.log("[id]", produto.id);
          handleRemove(produto.id);
        }}
      />
    </li>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleRemove: (id) => dispatch(REMOVE_ITEM_CART(id)),
  handleUpdateAmount: (id, quantidade) =>
    dispatch(UPDATE_QUANTIDADE_ITEM_CART(id, quantidade)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCarrinho);
