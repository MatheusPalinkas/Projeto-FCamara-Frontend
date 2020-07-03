import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MdReply } from "react-icons/md";
import api from "../../services/Api";

import Card from "../../components/Card";
import Button from "../../components/Button";

import "./styles.css";

export default function ProdutosComercio() {
  const [comercios, setComercios] = useState([]);
  const { idCategoria } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    (async function () {
      let filtro = "";
      if (idCategoria) filtro = `?idCategoria=${idCategoria}`;

      const { data } = await api.get(`/comercios${filtro}`);
      setComercios(data);
    })();
  }, [idCategoria]);

  return (
    <>
      <div className="containerBtnVoltar">
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

      <div className="container-comercios">
        {comercios.map((comercio) => (
          <Card
            key={comercio.id}
            titulo={comercio.nome}
            url={comercio.url}
            idComercio={comercio.id}
            curtido={true}
          />
        ))}
      </div>
    </>
  );
}
