import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import MaskInput from "react-text-mask";
import { MdKeyboardArrowRight } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";

import api from "../../services/Api";

import PropTypes from "prop-types";
import * as yup from "yup";

import Button from "../Button";

import "./styles.css";

const validates = yup.object().shape({
  nome: yup.string().required("O nome do comercio é obrigadotio"),
  horaAbertura: yup.string().required("O horario de atendimento é obrigadotio"),
  horaFechamento: yup
    .string()
    .required("O horario de atendimento é obrigadotio"),
  foto: yup.object().optional(),
  possuiEntregas: yup.boolean().optional(),
  categoria: yup.number().required("A sua categoria de comercio é obrigatoria"),
  cnpj: yup.string().optional(),
  pagamentoCartao: yup.boolean().optional(),
  pagamentoDinheiro: yup.boolean().optional(),
  pagamentoBoleto: yup.boolean().optional(),
});

const hoursNumberMask = [/[1-9]/, /\d/, ":", /\d/, /\d/];

const FormDadosComercio = ({ initialValues, handleSubmit, onClick }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    (async function () {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});

      const { data } = await api.get("/categorias");
      setCategorias(data);
    })();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validates}
    >
      <Form>
        <div className="form-dados-pessoais">
          <div className="input-field">
            <label htmlFor="nome">Nome</label>
            <Field type="text" id="nome" name="nome" />
            <ErrorMessage
              className="helper-text"
              name="nome"
              component="span"
            />
          </div>
          <div className="input-field">
            <label>Horario de funcionamento</label>
            <div className="input-mesma-linha">
              <div className="input-field">
                <Field name="horaAbertura">
                  {({ field }) => (
                    <MaskInput
                      {...field}
                      type="text"
                      id="horaAbertura"
                      mask={hoursNumberMask}
                    />
                  )}
                </Field>
              </div>

              <div className="input-field">
                <Field name="horaFechamento">
                  {({ field }) => (
                    <MaskInput
                      {...field}
                      type="text"
                      id="horaFechamento"
                      mask={hoursNumberMask}
                    />
                  )}
                </Field>
              </div>
            </div>
            <ErrorMessage
              className="helper-text"
              name="horaFechamento"
              component="span"
            />
            <ErrorMessage
              className="helper-text"
              name="horaAbertura"
              component="span"
            />
          </div>
          <div className="input-field inputs-possui-servico">
            <div className="input-mesma-linha">
              <p>
                <label htmlFor="Sim">
                  <Field
                    name="possuiEntregas"
                    type="radio"
                    value={true}
                    id="Sim"
                  />
                  <span>Sim </span>
                </label>
              </p>
              <p>
                <label htmlFor="Nao">
                  <Field
                    name="possuiEntregas"
                    type="radio"
                    value={false}
                    id="Nao"
                  />
                  <span>Não</span>
                </label>
              </p>
            </div>
          </div>
          <div className="input-field">
            <div className="input-field ">
              <Field as="select" id="categoria" name="categoria">
                <option value="" disabled selected>
                  Escolha uma categoria
                </option>
                {categorias.map((categoria) => (
                  <option value={categoria.id} key={categoria.id}>
                    {categoria.nome}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage
              className="helper-text"
              name="categoria"
              component="span"
            />
          </div>
          <div className="input-field">
            <label htmlFor="cnpj">CNPJ</label>
            <Field type="text" id="cnpj" name="cnpj" />
            <ErrorMessage
              className="helper-text"
              name="cnpj"
              component="span"
            />
          </div>
          <div className="input-field">
            <div className="radio-tipoUser">
              <p>
                <label htmlFor="pagamentoCartao">
                  <Field
                    name="pagamentoCartao"
                    type="checkbox"
                    value="pagamentoCartao"
                    id="pagamentoCartao"
                  />
                  <span>Sim </span>
                </label>
              </p>
              <p>
                <label htmlFor="pagamentoDinheiro">
                  <Field
                    name="pagamentoDinheiro"
                    type="checkbox"
                    value="pagamentoDinheiro"
                    id="pagamentoDinheiro"
                  />
                  <span>Não</span>
                </label>
              </p>
              <p>
                <label htmlFor="pagamentoBoleto">
                  <Field
                    name="pagamentoBoleto"
                    type="checkbox"
                    value="pagamentoBoleto"
                    id="pagamentoBoleto"
                  />
                  <span>Não</span>
                </label>
              </p>
            </div>
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

FormDadosComercio.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormDadosComercio;
