import React, { useEffect, useState, useMemo } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import MaskInput from "react-text-mask";
import { MdAddAPhoto } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";

import PropTypes from "prop-types";
import * as yup from "yup";

import Button from "../../Button";

import "../styles.css";
import "./styles.css";

const optionsDate = {
  autoClose: true,
  format: "yyyy/mm/dd",
  i18n: {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    cancel: "cancelar",
    clean: "limpar",
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Maio",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    weekdays: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    weekdaysAbbrev: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  },
};

const validates = yup.object().shape({
  nome: yup
    .string("O nome deve ser um texto")
    .trim()
    .required("O nome não deve ser vazio"),
  dataNascimento: yup
    .string("A data de nascimento não está em um formato valido")
    .required("A data de nascimento não deve ser vazio"),
  cpf: yup
    .string("O CPF não está em um formato valido")
    .trim()
    .required("O CPF é obrigatorio"),
  telefone: yup.string("O Telefone deve ser um texto").optional(),
  tipoUser: yup.string().required("O tipo de usuario é obrigatorio"),
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

const FormDadosPessoais = ({ initialValues, handleSubmit }) => {
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  useEffect(() => {
    const elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, optionsDate);
    M.updateTextFields();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validates}
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-dados-cadastro form-dados-pessoais">
            <div className="input-field">
              <label htmlFor="nome">Nome completo</label>
              <Field type="text" id="nome" name="nome" />
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
            <div className="container-form">
              <div className="file-field input-file-upload-foto-cadastro">
                <label
                  id="thumbnail"
                  htmlFor="input-image-cadastro"
                  style={{ backgroundImage: `url(${preview})` }}
                  className={`preview-imgaem-cadastrar ${
                    thumbnail ? "previa-foto" : ""
                  }`}
                >
                  <MdAddAPhoto color="#1D273B " size={32} />
                </label>
                <div className="div-cadastro-upload-foto">
                  <span>Nova Foto</span>
                  <input
                    type="file"
                    name="input-image-cadastro"
                    id="input-image-cadastro"
                    onChange={(event) => setThumbnail(event.target.files[0])}
                  />
                </div>
                <div className="file-path-wrapper div-cadastro-upload-foto">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
            </div>

            <div className="input-field div-tipo-user">
              <div className="div-radio">
                <p>
                  <label htmlFor="Cliente">
                    <Field
                      name="tipoUser"
                      type="radio"
                      value="Cliente"
                      id="Cliente"
                    />
                    <span>Cliente</span>
                  </label>
                </p>
                <p>
                  <label htmlFor="Vendedor">
                    <Field
                      name="tipoUser"
                      type="radio"
                      value="Vendedor"
                      id="Vendedor"
                    />
                    <span>Vendedor</span>
                  </label>
                </p>
              </div>
              {values.tipoUser === "Cliente" ? (
                <p>Estou a procura de produtos para comprar</p>
              ) : (
                <p>Estou a procurando divulgar e vender meus produtos</p>
              )}
              <ErrorMessage
                className="helper-text"
                name="tipoUser"
                component="span"
              />
            </div>
            <div className="form-submit">
              <Button
                submit="submit"
                text="Próximo"
                position="bottom"
                tooltip="Continuar no cadastro"
              />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

FormDadosPessoais.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormDadosPessoais;
