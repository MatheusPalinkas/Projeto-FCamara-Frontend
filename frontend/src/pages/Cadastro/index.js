import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="row container-cadastro">
      <div className="s12 div-form">
        <div className="card-panel">
          <Breadcrumb className="rastro-pao-cadastro">
            <Link className={`breadcrumb ${etapa === 0 && "ativo"}`}>
              Dados pessoais
            </Link>
            <Link className={`breadcrumb ${etapa === 1 && "ativo"}`}>
              Criar uma senha
            </Link>
            <Link className={`breadcrumb ${etapa === 2 && "ativo"}`}>
              Adicionar endereço
            </Link>
            {dadosPessoais.tipoUser === "Vendedor" && (
              <Link className={`breadcrumb ${etapa === 3 && "ativo"}`}>
                Comercio
              </Link>
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
              handleSubmit={(values) => {
                setEndereco(values);

                if (dadosPessoais.tipoUser === "Vendedor") setEtapa(etapa + 1);
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
