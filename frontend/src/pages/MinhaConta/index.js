import React from "react";
import { connect } from "react-redux";
import { MdReply } from "react-icons/md";
import { useHistory } from "react-router-dom";

import TableEnderecos from "../../components/FormsEditarPerfil/TableEnderecos";
import FormEditarDadosPessoas from "../../components/FormsEditarPerfil/FormEditarDadosPessoas";
import FormEditarDadosComercio from "../../components/FormsEditarPerfil/FormEditarDadosComercio";

import Button from "../../components/Button";

import "./styles.css";

function MinhaConta({ user }) {
  const { goBack } = useHistory();

  const dadosPessoais = {
    ...user,
  };
  const dadosComercio = {
    ...user.comercio,
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
        {user.comercio && (
          <div className="dados-comercio">
            <h2>Dados do meu comercio</h2>
            <FormEditarDadosComercio
              handleSubmit={(values) => {}}
              initialValues={dadosComercio}
            />
          </div>
        )}

        {!user.comercio && (
          <div className="dados-comercio">
            <h2>Meus endereções salvos</h2>
            <TableEnderecos id={user.id} />
          </div>
        )}
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(MinhaConta);
