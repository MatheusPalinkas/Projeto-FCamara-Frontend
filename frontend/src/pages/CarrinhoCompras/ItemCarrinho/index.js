import React, { useState } from "react";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";

import "./styles.css";

function ItemCarrinho({ produto }) {
  const [quantidade, setQuantidade] = useState(parseInt(produto.quantidade));
  const total = parseFloat(produto.preco) * parseInt(produto.quantidade);

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
      />
    </li>
  );
}

export default ItemCarrinho;
