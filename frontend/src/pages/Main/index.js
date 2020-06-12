import React, { useEffect, useState } from "react";
import api from "../../services/Api";
import "./styles.css";

import Card from "../../components/Card";

function Main() {
  const [comercios, setComercios] = useState([]);

  useEffect(async () => {
    const { data } = await api.get("/comercios");
    setComercios(data);
  }, []);

  return (
    <>
      <div className="container-main">
        <h1 className="titulo-main">
          Encontre um comercio proximo de você e ajude os comerciantes locais
        </h1>
        <cite className="referencia-foto">Photo by nrd on Unsplash</cite>
      </div>
      <div className="container-comercios">
        {comercios.map((comercio) => (
          <Card
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
