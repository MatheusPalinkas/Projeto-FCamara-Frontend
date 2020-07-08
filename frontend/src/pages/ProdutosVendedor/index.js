import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/Api";
import "./styles.css";
import Card from "../../components/Card";
import { MdReply } from "react-icons/md";

import Button from "../../components/Button";

export default function ProdutosVendedor() {
  const [produtos, setProdutos] = useState([]);
  const { idComercio } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    (async function () {
      const { data } = await api.get(`/produto/comercio/${idComercio}`);

      setProdutos(data.content);
    })();
  }, [idComercio, produtos]);

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
            quantidadeEstoque={produto.quantidade}
            url={produto.url}
            descricao={produto.descricao}
            produto={{ preco: produto.preco }}
            idVendedor={idComercio}
            handleUpdate={() =>
              setProdutos(produtos.filter((item) => item.id !== produto.id))
            }
          />
        ))}
      </div>
    </>
  );
}
