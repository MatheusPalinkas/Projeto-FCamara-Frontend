import React, { useState } from "react";

import FormEditarDadosPessoas from "../../components/FormsEditarPerfil/FormEditarDadosPessoas";
import FormEditarDadosComercio from "../../components/FormsEditarPerfil/FormEditarDadosComercio";

import "./styles.css";

function MinhaConta() {
  const dadosPessoais = {
    nome: "Matheus",
    dataNascimento: "31082001",
    cpf: "55555555555",
  };
  const dadosComercio = {
    nome: "Padaria do zé",
    categoria: 1,
  };

  return (
    <>
      <div className="container-editar-minha-conta">
        <div className="dados-pessoais">
          <h2>Meus dados</h2>
          <FormEditarDadosPessoas
            handleSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
            initialValues={dadosPessoais}
          />
        </div>
        <div className="dados-comercio">
          <h2>Dados do meu comercio</h2>
          <FormEditarDadosComercio
            handleSubmit={(values) => {
              alert("dsd");
              console.log(values);
            }}
            initialValues={dadosComercio}
          />
        </div>
      </div>
    </>
  );
}

export default MinhaConta;
