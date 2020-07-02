import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { MdEdit, MdSave } from "react-icons/md";
import MaskInput from "react-text-mask";
import M from "materialize-css/dist/js/materialize.min.js";

import api from "../../../services/Api";

import Button from "../../Button";
import ModalEndereco from "../../ModalEndereco";

import PropTypes from "prop-types";
import * as yup from "yup";

import "../styles.css";
import "./styles.css";

const handleSubmitEnvia = (values) => alert(JSON.stringify(values));
const initialValuesEnvia = {
  cep: "115340704",
  cidade: "Cubatão",
  uf: "SP",
  rua: "Rua Manoel Florêncio da Silva",
  numero: "423",
  bairro: "Parque São Luis",
  complemento: "sobrado",
};

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
      M.updateTextFields();
    })();
  }, []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validates}
      >
        <Form className="form-editar-dados">
          <div className="div-form-editar form-editar-dados-comercio">
            <div>
              <div className="input-field">
                <label htmlFor="nome">Nome do comercio</label>
                <Field type="text" id="nomeComercio" name="nome" disabled />
                <ErrorMessage
                  className="helper-text"
                  name="nome"
                  component="span"
                />
              </div>
              <div className="input-field">
                <div className="input-field ">
                  <Field as="select" id="categoria" name="categoria" disabled>
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
              <Button
                Icon={MdEdit}
                className="btn-editar-endereco"
                tooltip="Editar o endereço do meu comercio"
                text="Editar endereço"
                dataTarget="modal4"
              />
            </div>
            <div className="inputs-editaveis">
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

              <div className="input-field inputs-formas-pagamento">
                <label className="label-formas-pagamento">
                  Quais formas de pagamento vc aceita
                </label>
                <div className="div-radios-form div-formas-pagamento div-formas-pagamento-editar-perfil">
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
                </div>
              </div>
            </div>
          </div>
          <Button
            submit="submit"
            tooltip="Salvar dados do comercio"
            text="Salvar"
            position="bottom"
            className="btn-salvar-dados-perfil"
            Icon={MdSave}
          />
        </Form>
      </Formik>

      <ModalEndereco
        handleSubmit={handleSubmitEnvia}
        initialValues={initialValuesEnvia}
      />
    </>
  );
}

FormEditarDadosComercio.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormEditarDadosComercio;
