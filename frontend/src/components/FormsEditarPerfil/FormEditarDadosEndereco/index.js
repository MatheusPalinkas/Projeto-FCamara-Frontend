import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import MaskInput from "react-text-mask";
import M from "materialize-css/dist/js/materialize.min.js";

import api from "../../../services/Api";

import PropTypes from "prop-types";
import * as yup from "yup";

import "../styles.css";

const validates = yup.object().shape({
  nome: yup.string().required("O nome não deve ser vazio"),
  cnpj: yup.string().optional(),
  categoria: yup.number().required("A sua categoria de comercio é obrigatoria"),

  possuiEntregas: yup.string().optional(),
  pagamentoCartao: yup.boolean().optional(),
  pagamentoDinheiro: yup.boolean().optional(),
  pagamentoBoleto: yup.boolean().optional(),
});

const hoursNumberMask = [/[1-9]/, /\d/, ":", /\d/, /\d/];

function FormEditarDadosComercio({ initialValues, handleSubmit }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await api.get("/categorias");
      setCategorias(data);

      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
    })();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validates}
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-editar-dados-pessoais">
            <div>
              <div className="input-field">
                <label htmlFor="nome">Nome do comercio</label>
                <Field type="text" id="nome" name="nome" />
                <ErrorMessage
                  className="helper-text"
                  name="nome"
                  component="span"
                />
              </div>
              <div className="input-field">
                <label htmlFor="cnpj">CNPJ</label>
                <Field name="cnpj" type="text" id="cnpj" />
                <ErrorMessage
                  className="helper-text"
                  name="cnpj"
                  component="span"
                />
              </div>
              <div className="input-field">
                <div className="input-field ">
                  <Field as="select" id="categoria" name="categoria">
                    <option value={false}>Selecione uma categoria</option>
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
            </div>
            <div className="inputs-editaveis">
              <div className="input-field">
                <label className="label-hora">Horario de funcionamento</label>
                <div className="div-buttons-form hr-funcionamento">
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
                    <ErrorMessage
                      className="helper-text"
                      name="horaAbertura"
                      component="span"
                    />
                  </div>
                  <div className="input-field lbl-ate">Até</div>
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
                    <ErrorMessage
                      className="helper-text"
                      name="horaFechamento"
                      component="span"
                    />
                  </div>
                </div>
              </div>
              <div className="input-field inputs-possui-servico">
                <label
                  htmlFor="possuiEntregas"
                  className="label-possui-servico-entregas"
                >
                  Possui serviço de entregas
                </label>
                <div className="div-radios-form">
                  <p>
                    <label htmlFor="Sim">
                      <Field
                        name="possuiEntregas"
                        type="radio"
                        value="true"
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
                        value="false"
                        id="Nao"
                      />
                      <span>Não</span>
                    </label>
                  </p>
                </div>
              </div>
              <div className="input-field inputs-formas-pagamento">
                <label className="label-formas-pagamento">
                  Quais formas de pagamento vc aceita
                </label>
                <div className="div-radios-form div-formas-pagamento">
                  <p>
                    <label htmlFor="pagamentoCartao">
                      <Field
                        name="pagamentoCartao"
                        type="checkbox"
                        value="pagamentoCartao"
                        id="pagamentoCartao"
                      />
                      <span>Cartão</span>
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
                      <span>Dinheiro</span>
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
                      <span>Boleto</span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

FormEditarDadosComercio.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormEditarDadosComercio;
