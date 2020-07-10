import React, { useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import MaskInput from "react-text-mask";
import { MdSave } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";

import PropTypes from "prop-types";
import * as yup from "yup";

import Button from "../../Button";

import "../styles.css";

import { atualizarCliente } from "../../../services/cliente";

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

function FormEditarDadosPessoas({ initialValues }) {
  useEffect(() => {
    M.updateTextFields();
  }, []);

  const putCliente = async (values) => {
    try {
      const { id, nome, senha, telefone } = values;

      const formCliente = {
        id: id,
        nome: nome,
        senha: senha,
        telefone: telefone,
      };

      const data = await atualizarCliente({
        ...formCliente,
      });
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => await putCliente(values)}
      validationSchema={validates}
    >
      {({ values, handleSubmit }) => (
        <Form className="form-editar-dados" onSubmit={handleSubmit}>
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
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" disabled />
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
                  type="password"
                  className="helper-text"
                  name="senha"
                  component="span"
                />
              </div>
            </div>
          </div>
          <Button
            submit="submit"
            tooltip="Salvar meus dados"
            text="Salvar"
            position="bottom"
            className="btn-salvar-dados-perfil"
            Icon={MdSave}
          />
        </Form>
      )}
    </Formik>
  );
}

export default FormEditarDadosPessoas;
