import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { HANDLE_LOGIN } from "../../store/actions/user";
import api from "../../services/Api";

import Breadcrumb from "../../components/Breadcrumb";
import FormDadosPessoais from "../../components/FormsCadastro/FormDadosPessoais";
import FormDadosConta from "../../components/FormsCadastro/FormDadosConta";
import FormDadosEndereco from "../../components/FormsCadastro/FormDadosEndereco";
import FormDadosComercio from "../../components/FormsCadastro/FormDadosComercio";

import "./styles.css";

const Cadastro = ({ handleLogin }) => {
  const [etapa, setEtapa] = useState(0);
  const [dadosPessoais, setDadosPessoais] = useState({ tipoUser: "Cliente" });
  const [endereco, setEndereco] = useState({});
  const [foto, setFoto] = useState(null);

  const { push } = useHistory();

  const handleBackStage = (e) => {
    e.preventDefault();
    if (etapa === 0) return;
    setEtapa(etapa - 1);
  };

  const clearFormCliente = () => {
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
            .replace(" ", "")
            .trim()
        : "",
      dataNascimento: `${date.split("/")[2]}-${date.split("/")[1]}-${
        date.split("/")[0]
      }`,
      cpf: dadosPessoais.cpf.replace(/\./g, "").replace("-", ""),
      codigoComercio: "",
      urlFoto: "",
    };
    return formCliente;
  };

  const postFoto = async () => {
    if (!!foto) {
      const data = new FormData();

      data.append("file", foto);

      return await api.post(`/imagem/${dadosPessoais.tipoUser}`, data);
    }
    return null;
  };

  const postCliente = async () => {
    try {
      const url = null; //await postFoto();
      const formCliente = clearFormCliente();
      const { data } = await api.post("/cliente", { ...formCliente });

      delete data.tipoUsuario;
      delete data.favoritos;
      delete data.endereco;

      delete data.urlFoto;

      handleLogin({
        ...data,
        url,
      });

      return data.id;
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  };

  const postEndereco = async (id, endereco, tipo) => {
    try {
      const formEndereco = {
        ...endereco,
        cep: endereco.cep.replace("-", ""),
        logradouro: endereco.rua,
        complemento: endereco.complemento || " ",
      };

      delete formEndereco.rua;

      const { data } = await api.post(`/endereco/${tipo}`, { ...formEndereco });
      return data;
    } catch (error) {
      alert(`Erro: ${error}`);
    }
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
              saveFile={(foto) => setFoto(foto)}
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

                const idCliente = await postCliente();
                await postEndereco(idCliente, values, "cliente");
                push("/");
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (user) => dispatch(HANDLE_LOGIN(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
