import React, { useEffect } from "react";
import { MdReply, MdSave } from "react-icons/md";
import { Formik, Field, Form, ErrorMessage } from "formik";
import M from "materialize-css/dist/js/materialize.min.js";

import PropTypes from "prop-types";
import * as yup from "yup";

import Button from "../../Button";

import "../styles.css";
import "./styles.css";

const validates = yup.object().shape({
  cep: yup
    .string()
    .length(8, "O CEP deve ter 8 caracteres")
    .required("O CEP é obrigadotio"),
  cidade: yup.string().required("A cidade não deve ser vazia"),
  uf: yup
    .string()
    .length(2, "A UF deve ter dois caracters")
    .required("A UF não deve ser vazio"),
  rua: yup.string().required("A rua não deve ser vazio"),
  numero: yup.number().required("O numero não deve ser vazio"),
  bairro: yup.string().required("O bairro não deve ser vazio"),
  complemento: yup.string().optional(),
});

const FormDadosEndereco = ({
  initialValues,
  handleSubmit,
  handleBackStage,
  vendedor,
}) => {
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
        <div className="form-dados-cadastro form-dados-pessoais">
          <div className="input-field">
            <label htmlFor="cep">CEP</label>
            <Field type="text" id="cep" name="cep" />
            <ErrorMessage className="helper-text" name="cep" component="span" />
          </div>
          <div className="inputs-mesma-linha">
            <div className="input-field">
              <label htmlFor="cidade">Cidade</label>
              <Field name="cidade" type="text" id="cidade" />
              <ErrorMessage
                className="helper-text"
                name="cidade"
                component="span"
              />
            </div>
            <div className="input-field input-uf">
              <label htmlFor="uf">UF</label>
              <Field name="uf" type="text" id="uf" />
              <ErrorMessage
                className="helper-text"
                name="uf"
                component="span"
              />
            </div>
          </div>
          <div className="inputs-mesma-linha">
            <div className="input-field">
              <label htmlFor="rua">Rua</label>
              <Field name="rua" type="text" id="rua" />
              <ErrorMessage
                className="helper-text"
                name="rua"
                component="span"
              />
            </div>
            <div className="input-field input-numero">
              <label htmlFor="numero">Numero</label>
              <Field name="numero" type="text" id="numero" />
              <ErrorMessage
                className="helper-text"
                name="numero"
                component="span"
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="bairro">Bairro</label>
            <Field name="bairro" type="text" id="bairro" />
            <ErrorMessage
              className="helper-text"
              name="bairro"
              component="span"
            />
          </div>
          <div className="input-field">
            <label htmlFor="complemento">Complemento</label>
            <Field
              name="complemento"
              className="materialize-textarea"
              type="text"
              id="complemento"
            />
          </div>

          <div className="div-buttons-form">
            <Button
              tipo="Link"
              onClick={handleBackStage}
              text="Voltar"
              typeButton="secundaria"
              Icon={MdReply}
            />
            {vendedor === true ? (
              <Button submit="submit" text="Próximo" />
            ) : (
              <Button
                submit="submit"
                text="Finalizar"
                tooltip="Finalizar cadastro"
                Icon={MdSave}
              />
            )}
          </div>
        </div>
      </Form>
    </Formik>
  );
};

FormDadosEndereco.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleBackStage: PropTypes.func.isRequired,
  vendedor: PropTypes.bool.isRequired,
};

export default FormDadosEndereco;
