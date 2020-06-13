import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import M from "materialize-css/dist/js/materialize.min.js";

import PropTypes from "prop-types";
import * as yup from "yup";

import "./styles.css";

const validates = yup.object().shape({
  nome: yup
    .string("O nome deve ser um texto")
    .required("O nome não deve ser vazio"),
  dataNascimento: yup
    .string("A data de nascimento não está em um formato valido")
    .required("A data de nascimento não deve ser vazio"),
  cpf: yup
    .string("O CPF não está em um formato valido")
    .required("O CPF é obrigatorio"),
  telefone: yup.string("O Telefone deve ser um texto").optional(),
});

const FormDadosPessoais = ({ initialValues, handleSubmit }) => {
  useEffect(() => {
    const elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, {
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
    });
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validates}
    >
      <Form>
        <div className="form-dados-pessoais">
          <div class="input-field">
            <label htmlFor="nome">Nome completo</label>
            <Field type="text" id="nome" name="nome" />
            <ErrorMessage class="helper-text" name="nome" component="span" />
          </div>
          <div class="input-field">
            <label htmlFor="dataNascimento">Data de nascimento</label>
            <Field
              class="datepicker"
              type="text"
              id="dataNascimento"
              name="dataNascimento"
            />
            <ErrorMessage
              class="helper-text"
              name="dataNascimento"
              component="span"
            />
          </div>

          <div class="input-field">
            <label htmlFor="cpf">CPF</label>
            <Field type="text" id="cpf" name="cpf" />
            <ErrorMessage class="helper-text" name="cpf" component="span" />
          </div>
          <div class="input-field">
            <label htmlFor="telefone">Telefone</label>
            <Field type="text" id="telefone" name="telefone" />
            <ErrorMessage
              class="helper-text"
              name="telefone"
              component="span"
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

FormDadosPessoais.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormDadosPessoais;
