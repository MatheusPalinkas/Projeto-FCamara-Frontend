import React, { useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb";
import FormDadosPessoais from "../../components/FormDadosPessoais";
import FormDadosConta from "../../components/FormDadosConta";
import "./styles.css";

const Cadastro = () => {
  const [etapa, setEtapa] = useState(0);
  const [dadosPessoais, setDadosPessoais] = useState({});

  return (
    <div className="row container-cadastro">
      <div className="s12 div-form">
        <div className="card-panel">
          <Breadcrumb className="rastro-pao">
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
              onClick={(e) => {
                e.preventDefault();
                setEtapa(etapa - 1);
              }}
              initialValues={dadosPessoais}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
