import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/Api";
import "./styles.css";

import Card from "../../components/Card";

import ModalLogin from "../../components/ModalLogin";

import Button from "../../components/Button";

function abre() {
  return alert("aaaaaaaa")
}

function Main() {
  const [comercios, setComercios] = useState([]);
  const { idCategoria } = useParams();

  const handleSubmit = (values) => alert(JSON.stringify(values));
  const initialValues = {};

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

      <a class="waves-effect waves-light btn modal-trigger" href="#modal1">
        Modal com a
      </a>
      <button data-target="modal1" class="btn modal-trigger">Modal com bun</button>

      <Button />

      <ModalLogin handleSubmit={handleSubmit} initialValues={initialValues} />
      
    </>
  );
}

export default Main;
