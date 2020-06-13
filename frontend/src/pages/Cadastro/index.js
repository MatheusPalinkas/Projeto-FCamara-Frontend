import React from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb";
import FormDadosPessoais from "../../components/FormDadosPessoais";
import "./styles.css";

const Cadastro = () => {
  return (
    <div className="row container-cadastro">
      <div className="s12 div-form">
        <div className="card-panel">
          <Breadcrumb className="rastro-pao">
            <Link className="breadcrumb">Dados pessoais</Link>
            <Link className="breadcrumb">Criar uma senha</Link>
            <Link className="breadcrumb">Adicionar endereço</Link>
            <Link className="breadcrumb">Comercio</Link>
          </Breadcrumb>

          <FormDadosPessoais
            handleSubmit={(values) => {
              console.log(JSON.stringify(values));
            }}
            initialValues={{}}
          />
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
