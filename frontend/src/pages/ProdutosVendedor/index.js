import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/Api";
import "./styles.css";
import Card from "../../components/Card";
import { MdReply } from "react-icons/md";

import Button from "../../components/Button";

export default function ProdutosVendedor() {
  const [produtos, setProdutos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    (async function () {
      let filtro = "";
      if (idCategoria) filtro = `?idCategoria=${idCategoria}`;
      console.log(filtro);
      const { data } = await api.get(`/produtos${filtro}`);
      setProdutos(data);
    })();
  }, [idCategoria]);

  return (
    <>
      <div className="containerBtn">
        <div className="btnVendedor">
          <Button
            text={"Cadastra novo produto"}
            tooltip={"Cadastre um novo produto"}
          />
        </div>
        <div className="btnVendedor">
          <Button text={"VOLTAR"} typeButton={"secundaria"} Icon={MdReply} />
        </div>
      </div>

      <div className="container-comercios produtos">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            idVendedor={produto.idComercio}
            titulo={produto.nome}
            url={produto.url}
            descricao={produto.descricao}
            produto={{ preco: produto.preco }}
          />
        ))}
      </div>
    </>
  );
}
