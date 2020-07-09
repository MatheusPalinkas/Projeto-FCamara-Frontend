import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { HANDLE_LOGIN } from "../../store/actions/user";

import { criarFoto } from "../../services/foto";
import { criarCliente } from "../../services/cliente";
import { criarEndereco } from "../../services/endereco";
import { criarComercio } from "../../services/comercio";
import { criarVendedor } from "../../services/vendedor";

import Breadcrumb from "../../components/Breadcrumb";
import FormDadosPessoais from "../../components/FormsCadastro/FormDadosPessoais";
import FormDadosConta from "../../components/FormsCadastro/FormDadosConta";
import FormDadosEndereco from "../../components/FormsCadastro/FormDadosEndereco";
import FormDadosComercio from "../../components/FormsCadastro/FormDadosComercio";

import "./styles.css";

const Cadastro = ({ handleLogin }) => {
  const [etapa, setEtapa] = useState(0);
  const [dadosPessoais, setDadosPessoais] = useState({ tipoUser: "cliente" });
  const [endereco, setEndereco] = useState({});
  const [foto, setFoto] = useState(null);

  const { push } = useHistory();

  const handleBackStage = (e) => {
    e.preventDefault();
    if (etapa === 0) return;
    setEtapa(etapa - 1);
  };

  const clearFormPost = () => {
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
    try {
      return await criarFoto(foto);
    } catch (error) {
      alert("erro: ", error);
    }
  };

  const postCliente = async () => {
    try {
      const url = (await postFoto()) || null;
      const formCliente = clearFormPost();
      const data = await criarCliente({
        ...formCliente,
        urlFoto: url,
      });

      delete data.tipoUsuario;
      delete data.favoritos;
      delete data.endereco;

      delete data.urlFoto;

      const date = data.dataNascimento;
      handleLogin({
        ...data,
        url,
        dataNascimento: `${date.split("-")[2]}/${date.split("-")[1]}/${
          date.split("-")[0]
        }`,
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
        codigoDetentor: id,
        nome: "Principal",
      };

      delete formEndereco.rua;

      const data = await criarEndereco(tipo, formEndereco);
      return data.id;
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  };

  const postComercio = async (idEndereco, comercio) => {
    try {
      const formComercio = {
        nome: comercio.nome,
        codigoEndereco: idEndereco,
        possuiServicoEntrega: false,
        urlFoto: "",
        cnpj: comercio.cnpj || "",
        horarioAbertura: comercio.horaAbertura,
        horarioFechamento: comercio.horaFechamento,
        codigoCategoria: comercio.categoria,
        valorEntrega: Number(comercio.frete),
        tempoEntrega: comercio.diasParaEntrega,
        localAtendimento: false,
        pagamentoDinheiro:
          comercio.pagamentos.indexOf("dinheiro") !== -1 || false,
        pagamentoCartao: comercio.pagamentos.indexOf("cartao") !== -1 || false,
      };
      const data = await criarComercio(formComercio);
      return data;
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  };

  const postVendedor = async (comercio) => {
    try {
      const url = await postFoto();
      const formVendedor = clearFormPost();
      const data = await criarVendedor({
        ...formVendedor,
        codigoComercio: comercio.id,
      });

      delete data.tipoUsuario;
      delete data.urlFoto;
      delete data.codigoComercio;

      const date = data.dataNascimento;
      handleLogin({
        ...data,
        url,
        dataNascimento: `${date.split("-")[2]}/${date.split("-")[1]}/${
          date.split("-")[0]
        }`,
        comercio: comercio,
      });

      return data.id;
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
            {dadosPessoais.tipoUser === "vendedor" && (
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

                if (dadosPessoais.tipoUser === "vendedor") {
                  setEtapa(etapa + 1);
                  return;
                }

                const idCliente = await postCliente();
                await postEndereco(idCliente, values, "cliente");
                push("/");
              }}
              handleBackStage={handleBackStage}
              initialValues={endereco}
              vendedor={dadosPessoais.tipoUser === "vendedor"}
            />
          )}

          {etapa === 3 && (
            <FormDadosComercio
              handleSubmit={async (values) => {
                const idEndereco = await postEndereco("", endereco, "COMERCIO");
                const comercio = await postComercio(idEndereco, values);
                await postVendedor(comercio);
                push("/");
              }}
              handleBackStage={handleBackStage}
              initialValues={{ possuiCnpj: "nao" }}
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
