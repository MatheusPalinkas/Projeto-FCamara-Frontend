import React, { useEffect, useState, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/Api";
import { MdReply } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";

import ModalEstoque from "../../components/ModalEstoque";
import Button from "../../components/Button";
import Card from "../../components/Card";

import "./styles.css";

export default function ProdutosVendedor() {
  const [inicialValuesEstoque, setInicialValuesEstoque] = useState({});
  const [idProdutoEdit, setIdProdutoEdit] = useState("");
  const [produtos, setProdutos] = useState([]);

  const { idComercio } = useParams();
  const { goBack } = useHistory();

  const getComercio = useCallback(async () => {
    const { data } = await api.get(`/produto/comercio/${idComercio}`);
    setProdutos(data.content);
  }, [idComercio]);

  useEffect(() => {
    getComercio();
  }, [getComercio]);

  useEffect(() => {
    if (idProdutoEdit) openModal();
  }, [idProdutoEdit]);

  const openModal = () => {
    const elem = document.querySelector("#modal-alterar-quantidade");
    var instance = M.Modal.getInstance(elem);
    instance.open();
  };

  return (
    <>
      <div className="containerBtn">
        <div className="btnVendedor">
          <Button
            tipo="Link"
            to={`/novo/produto/${idComercio}`}
            text="Novo produto"
            tooltip="Cadastre um novo produto"
          />
        </div>
        <div className="btnVendedor">
          <Button
            text="VOLTAR"
            typeButton="secundaria"
            Icon={MdReply}
            onClick={(e) => {
              e.preventDefault();
              goBack();
            }}
          />
        </div>
      </div>

      <div className="container-comercios div-container-produtos">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            titulo={produto.nome}
            url={produto.url}
            descricao={produto.descricao}
            produto={{ preco: produto.preco }}
            produtoDemanda={produto.produtoPorDemanda}
            disponivel={produto.produtoDisponivel}
            handleEdit={() => {
              setInicialValuesEstoque({
                tipo: !produto.produtoPorDemanda ? "estoque" : "demanda",
                status: produto.produtoDisponivel
                  ? "Disponivel"
                  : "Indisponivel",
                quantidade: produto.quantidade,
              });
              setIdProdutoEdit(produto.id);
            }}
            idVendedor={idComercio}
            handleUpdate={() =>
              setProdutos(produtos.filter((item) => item.id !== produto.id))
            }
          />
        ))}
      </div>
      <ModalEstoque
        initialValues={inicialValuesEstoque}
        idProduto={idProdutoEdit}
        updateProdutos={getComercio}
      />
    </>
  );
}
