import React, { useState } from "react";

import FormEditarDadosPessoas from "../../components/FormsEditarPerfil/FormEditarDadosPessoas";
import FormEditarDadosComercio from "../../components/FormsEditarPerfil/FormEditarDadosComercio";

import "./styles.css";

function MinhaConta() {
  const [dadosPessoais, setDadosPessoais] = useState({});
  const [dadosComercio, setDadosComercio] = useState({});

  return (
    <>
      <div className="container-editar-minha-conta">
        <div className="dados-pessoais">
          <h2>Meus dados</h2>
          <FormEditarDadosPessoas
            handleSubmit={(values) => {
              console.log(values);
            }}
            initialValues={dadosPessoais}
          />
        </div>
        <div className="dados-comercio">
          <h2>Dados do meu comercio</h2>
          <FormEditarDadosComercio
            handleSubmit={(values) => {
              console.log(values);
            }}
            initialValues={dadosComercio}
          />
        </div>
        <div className="dados-endereco">
          <h2>Meus endereços</h2>
        </div>
      </div>
    </>
  );
}

export default MinhaConta;
