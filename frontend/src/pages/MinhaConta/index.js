import React from "react";
import { MdReply } from "react-icons/md";
import { useHistory } from "react-router-dom";

import FormEditarDadosPessoas from "../../components/FormsEditarPerfil/FormEditarDadosPessoas";
import FormEditarDadosComercio from "../../components/FormsEditarPerfil/FormEditarDadosComercio";
import Button from "../../components/Button";

import "./styles.css";

function MinhaConta() {
  const { goBack } = useHistory();

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
        <div className="container-btn-meu-perfil-voltar">
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
