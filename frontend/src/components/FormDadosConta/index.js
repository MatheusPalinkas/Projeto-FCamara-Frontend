import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { MdKeyboardArrowRight } from "react-icons/md";

import PropTypes from "prop-types";
import * as yup from "yup";

import Button from "../Button";

import "./styles.css";

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

const FormDadosConta = ({ initialValues, handleSubmit, onClick }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validates}
    >
      <Form>
        <div className="form-dados-pessoais">
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

          <div className="form-submit">
            <button onClick={onClick}>Voltar</button>
            <button type="submit">Proximo</button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

FormDadosConta.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormDadosConta;
