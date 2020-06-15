import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/Api";
import "./styles.css";
import Card from "../../components/Card";

function Main() {
  const [comercios, setComercios] = useState([]);
  const { idCategoria } = useParams();

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
      <div className="container-main">
        <h1 className="titulo-main">
          Encontre um comercio proximo de você e ajude os comerciantes locais
        </h1>
        <cite className="referencia-foto">Photo on Unsplash</cite>
      </div>
      <div className="container-comercios">
        {comercios.map((comercio) => (
          <Card
            key={comercio.id}
            titulo={comercio.nome}
            url={comercio.url}
            idComercio={comercio.id}
          />
        ))}
      </div>
    </>
  );
}

export default Main;
