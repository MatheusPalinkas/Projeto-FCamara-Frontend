import React, { useState } from "react";
import { MdSave } from "react-icons/md";

import FormEditarDadosPessoas from "../../components/FormsEditarPerfil/FormEditarDadosPessoas";
import FormEditarDadosComercio from "../../components/FormsEditarPerfil/FormEditarDadosComercio";
import Button from "../../components/Button";

import "./styles.css";

function MinhaConta() {
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: "Matheus",
    dataNascimento: "31082001",
    cpf: "55555555555",
  });
  const [dadosComercio, setDadosComercio] = useState({
    nome: "Padaria do zé",
    categoria: 1,
  });

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
        <Button
          submit="submit"
          tooltip="Salvar dados da minha conta"
          text="Salvar dados"
          className="btn-salvar-dados-perfil"
          Icon={MdSave}
        />
      </div>
    </>
  );
}

export default MinhaConta;
