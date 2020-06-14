import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/Api";
import "./styles.css";
import Card from "../../components/Card";

import Button from "../../components/Button";

export default function ProdutosVendedor() {
  const [comercios, setComercios] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    (async function () {
      let filtro = "";
      if (idCategoria) filtro = `?idCategoria=${idCategoria}`;
      console.log(filtro);
      const { data } = await api.get(`/comercios${filtro}`);
      setComercios(data);
    })();
  }, [idCategoria]);

  return (
    <>
      <div className="btnCadastro">
        <Button text={"Cadastra novo produto"} />
      </div>
      <div className="btnVoltar">
        <Button text={"VOLTAR"} typeButton={"secundaria"} />
      </div>

      <div className="container-comercios produtos">
        {comercios.map((comercio) => (
          <Card
            key={comercio.id}
            titulo={comercio.nome}
            url={comercio.url}
            idVendedor={54654655485}
          />
        ))}
      </div>
    </>
  );
}
