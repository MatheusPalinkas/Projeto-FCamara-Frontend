import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/Api";
import "./styles.css";
import Card from "../../components/Card";
import PesquisaHome from "../../components/PesquisaHome";

function Main() {
  const [comercios, setComercios] = useState([]);
  const [nomeFiltro, setNomeFiltro] = useState("");
  const { idCategoria } = useParams();

  useEffect(() => {
    (async function () {
      let filtro = "";
      if (idCategoria) filtro = `?idCategoria=${idCategoria}`;
      if (nomeFiltro) filtro = `?nome=${nomeFiltro}`;

      const { data } = await api.get(`/comercio${filtro}`);
      setComercios(data.content);
    })();
  }, [idCategoria, nomeFiltro]);

  return (
    <>
      <div className="container-main">
        <h1 className="titulo-main">
          Encontre um comercio proximo de você e ajude os comerciantes locais
        </h1>
        <cite className="referencia-foto">Photos on Unsplash</cite>
      </div>
      <PesquisaHome
        txtFiltro={nomeFiltro}
        handleChangeFilter={(e) => setNomeFiltro(e.target.value)}
      />
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
