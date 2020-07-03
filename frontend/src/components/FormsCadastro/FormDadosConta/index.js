import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import M from "materialize-css/dist/js/materialize.min.js";
import { MdReply } from "react-icons/md";

import PropTypes from "prop-types";
import * as yup from "yup";

import Button from "../../Button";

import "../styles.css";

const validates = yup.object().shape({
  email: yup
    .string()
    .email("O email digitado não é valido ")
    .trim()
    .required("O email não deve ser vazio"),
  senha: yup
    .string()
    .min(8, "A senha deve ter no minimo 8 caracteres")
    .required("A senha deve ser vazio")
    .oneOf([yup.ref("repetirSenha")], "As senhas estão diferentes"),
  repetirSenha: yup
    .string()
    .min(8, "A senha deve ter no minimo 8 caracteres")
    .required("A senha deve ser vazio")
    .oneOf([yup.ref("senha")], "As senhas estão diferentes"),
});

const FormDadosConta = ({ initialValues, handleSubmit, handleBackStage }) => {
  useEffect(() => {
    M.updateTextFields();
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validates}
    >
      <Form>
        <div
          className="form-dados-cadastro 
                      form-dados-conta"
        >
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              className="helper-text"
              name="email"
              component="span"
            />
          </div>
          <div className="input-field">
            <label htmlFor="senha">Senha</label>
            <Field name="senha" type="password" id="senha" />
            <ErrorMessage
              className="helper-text"
              name="senha"
              component="span"
            />
          </div>
          <div className="input-field">
            <label htmlFor="repetirSenha">confirmar senha</label>
            <Field name="repetirSenha" type="password" id="repetirSenha" />
            <ErrorMessage className="helper-text" name="cpf" component="span" />
          </div>

          <div className="div-buttons-form">
            <Button
              onClick={handleBackStage}
              text="Voltar"
              tipo="Link"
              typeButton="secundaria"
              tooltip="Voltar para etapa anterior"
              Icon={MdReply}
            />
            <Button
              onClick={() => {}}
              submit="submit"
              text="Próximo"
              position="bottom"
              tooltip="Continuar cadastro"
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

FormDadosConta.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleBackStage: PropTypes.func.isRequired,
};

export default FormDadosConta;
