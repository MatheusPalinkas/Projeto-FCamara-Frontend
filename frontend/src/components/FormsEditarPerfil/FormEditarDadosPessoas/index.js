import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import MaskInput from "react-text-mask";

import PropTypes from "prop-types";
import * as yup from "yup";

import "../styles.css";

const validates = yup.object().shape({
  nome: yup.string().required("O nome não deve ser vazio"),
  email: yup.string().email().required("O email não deve ser vazio"),
  cpf: yup.string().trim().required("O CPF é obrigatorio"),
  dataNascimento: yup
    .string()
    .required("A data de nascimento não deve ser vazio"),

  telefone: yup.string("O Telefone não deve ser um texto").optional(),
  senha: yup
    .string()
    .min(8, "A senha deve ter no minimo 8 caracteres")
    .required("A senha não deve ser vazio"),
});
const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
const cpfNumberMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];
const DateNumberMask = [
  /[0-3]/,
  /[0-9]/,
  "/",
  /[0-1]/,
  /[0-9]/,
  "/",
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

function FormEditarDadosPessoas({ initialValues, handleSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validates}
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="div-form-editar">
            <div>
              <div className="input-field">
                <label htmlFor="nome">Nome completo</label>
                <Field type="text" id="nome" name="nome" disabled />
                <ErrorMessage
                  className="helper-text"
                  name="nome"
                  component="span"
                />
              </div>
              <div className="input-field">
                <label htmlFor="dataNascimento">Data de nascimento</label>
                <Field name="dataNascimento">
                  {({ field }) => (
                    <MaskInput
                      {...field}
                      disabled
                      type="text"
                      id="dataNascimento"
                      mask={DateNumberMask}
                    />
                  )}
                </Field>
                <ErrorMessage
                  className="helper-text"
                  name="dataNascimento"
                  component="span"
                />
              </div>
              <div className="input-field">
                <label htmlFor="cpf">CPF</label>
                <Field name="cpf">
                  {({ field }) => (
                    <MaskInput
                      disabled
                      {...field}
                      type="text"
                      id="cpf"
                      mask={cpfNumberMask}
                    />
                  )}
                </Field>
                <ErrorMessage
                  className="helper-text"
                  name="cpf"
                  component="span"
                />
              </div>
            </div>
            <div className="inputs-editaveis">
              <div className="input-field">
                <label htmlFor="telefone">Telefone</label>
                <Field name="telefone">
                  {({ field }) => (
                    <MaskInput
                      {...field}
                      type="text"
                      id="telefone"
                      mask={phoneNumberMask}
                    />
                  )}
                </Field>
                <ErrorMessage
                  className="helper-text"
                  name="telefone"
                  component="span"
                />
              </div>
              <div className="input-field">
                <label htmlFor="senha">Senha</label>
                <Field name="senha" type="text" id="senha" />
                <ErrorMessage
                  type="password"
                  className="helper-text"
                  name="senha"
                  component="span"
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

FormEditarDadosPessoas.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormEditarDadosPessoas;
