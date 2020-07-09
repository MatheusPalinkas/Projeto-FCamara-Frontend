import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MdSave, MdReply } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import M from "materialize-css/dist/js/materialize.min.js";
import * as yup from "yup";

import Modal from "../Modal";
import Button from "../Button";

import "./styles.css";

const validates = yup.object().shape({
  nome: yup.string().required("O nome do endereço não deve ser vazia"),
  cep: yup
    .string()
    .length(9, "O CEP deve ter 8 caracteres")
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

const ModalEndereco = ({ handleSubmit, initialValues, comercio }) => {
  useEffect(() => {
    (async function () {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
      M.updateTextFields();
    })();
  }, []);

  return (
    <Modal tipo={"endereco"} id="modal4">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validates}
      >
        <Form>
          <div className="titulo">
            <h1>Endereço</h1>
          </div>

          <div className="form-dados-cadastro form-dados-pessoais">
            {comercio ? (
              <></>
            ) : (
              <div className="input-field">
                <label htmlFor="nome">Nome do endereço</label>
                <Field type="text" id="nome" name="nome" />
                <ErrorMessage
                  className="helper-text"
                  name="nome"
                  component="span"
                />
              </div>
            )}

            <div className="input-field">
              <label htmlFor="cep">CEP</label>
              <Field type="text" id="cep" name="cep" />
              <ErrorMessage
                className="helper-text"
                name="cep"
                component="span"
              />
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
              <label htmlFor="Complemento">Complemento</label>
              <Field name="complemento" type="text" id="complemento" />
            </div>

            <div className="div-buttons-form">
              <Button
                className="modal-close"
                text="Voltar"
                Icon={MdReply}
                typeButton="secundaria"
              />

              <Button
                className="btnSalvarEndereco"
                submit="submit"
                type="submit"
                text="Salvar"
                tooltip="Salvar endereço"
                Icon={MdSave}
              />
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

ModalEndereco.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ModalEndereco;
