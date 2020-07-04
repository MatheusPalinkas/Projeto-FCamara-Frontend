import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";

import Breadcrumb from "../../components/Breadcrumb";
import FormDadosPessoais from "../../components/FormsCadastro/FormDadosPessoais";
import FormDadosConta from "../../components/FormsCadastro/FormDadosConta";
import FormDadosEndereco from "../../components/FormsCadastro/FormDadosEndereco";
import FormDadosComercio from "../../components/FormsCadastro/FormDadosComercio";

import "./styles.css";

const Cadastro = () => {
  const [etapa, setEtapa] = useState(0);
  const [dadosPessoais, setDadosPessoais] = useState({ tipoUser: "Cliente" });
  const [endereco, setEndereco] = useState({});

  const handleBackStage = (e) => {
    e.preventDefault();
    if (etapa === 0) return;
    setEtapa(etapa - 1);
  };

  const postCliente = async () => {
    delete dadosPessoais.repetirSenha;
    delete dadosPessoais.tipoUser;

    const date = dadosPessoais.dataNascimento;
    const formCliente = {
      ...dadosPessoais,
      telefone: !!dadosPessoais.telefone
        ? dadosPessoais.telefone
            .replace("(", "")
            .replace(")", "")
            .replace("-", "")
            .trim()
        : "",
      dataNascimento: `${date.split("/")[2]}-${date.split("/")[1]}-${
        date.split("/")[0]
      }`,
      cpf: dadosPessoais.cpf.replace(/\./g, "").replace("-", ""),
      codigoComercio: "",
      urlFoto: "",
    };

    const { data } = await api.post("/cliente", { ...formCliente });
    console.log(JSON.stringify(data));
  };
  return (
    <div className="row container-cadastro">
      <div className="s12 div-form">
        <div className="card-panel">
          <Breadcrumb className="rastro-pao-cadastro">
            <span className={`link breadcrumb ${etapa === 0 && "ativo"}`}>
              Dados pessoais
            </span>
            <span className={`link breadcrumb ${etapa === 1 && "ativo"}`}>
              Criar uma senha
            </span>
            <span className={`link breadcrumb ${etapa === 2 && "ativo"}`}>
              Adicionar endereço
            </span>
            {dadosPessoais.tipoUser === "Vendedor" && (
              <span className={`link breadcrumb ${etapa === 3 && "ativo"}`}>
                Comercio
              </span>
            )}
          </Breadcrumb>

          {etapa === 0 && (
            <FormDadosPessoais
              handleSubmit={(values) => {
                setDadosPessoais(values);
                setEtapa(etapa + 1);
              }}
              initialValues={dadosPessoais}
            />
          )}

          {etapa === 1 && (
            <FormDadosConta
              handleSubmit={(values) => {
                setDadosPessoais({ ...dadosPessoais, ...values });
                setEtapa(etapa + 1);
              }}
              handleBackStage={handleBackStage}
              initialValues={dadosPessoais}
            />
          )}

          {etapa === 2 && (
            <FormDadosEndereco
              handleSubmit={async (values) => {
                setEndereco(values);

                if (dadosPessoais.tipoUser === "Vendedor") {
                  setEtapa(etapa + 1);
                  return;
                }
                await postCliente();
                console.log(endereco);
              }}
              handleBackStage={handleBackStage}
              initialValues={endereco}
              vendedor={dadosPessoais.tipoUser === "Vendedor"}
            />
          )}

          {etapa === 3 && (
            <FormDadosComercio
              handleSubmit={(values) => {
                setEndereco(values);
                setEtapa(etapa + 1);
              }}
              handleBackStage={handleBackStage}
              initialValues={endereco}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
