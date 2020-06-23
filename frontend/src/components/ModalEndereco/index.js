import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MdSave, MdReply } from "react-icons/md";
import { Formik, Form, Field } from "formik";
import M from "materialize-css/dist/js/materialize.min.js";

import Modal from "../Modal";
import Button from "../Button";

import "./styles.css";

const ModalEstoque = ({ handleSubmit, initialValues }) => {
  useEffect(() => {
    (async function () {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
    })();
  }, []);

  return (
    <Modal tipo={"endereco"} id="modal4">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="titulo">
            <h1>Endereço</h1>
          </div>

          <div>
            <div className="containerLabelEndereco">
              <label>Cep:</label>
              <Field name="Cep" placeholder="Digite seu Cep" type="text" />
            </div>
            <div className="containerLabelEndereco">
              <label>Cidade:</label>
              <Field
                name="Cidade"
                placeholder="Digite sua Cidade"
                type="text"
              />
            </div>
            <div className="containerLabelEndereco">
              <label>Logradouro:</label>
              <Field
                name="Logradouro"
                placeholder="Digite seu Logradouro"
                type="text"
              />
            </div>
            <div className="containerLabelEndereco">
              <label>Complemento:</label>
              <Field
                name="Complemento"
                placeholder="Digite seu Complemento"
                type="text"
              />
            </div>
            <div className="containerLabelEndereco">
              <label>Uf:</label>
              <Field name="Uf" placeholder="Digite seu Uf" type="text" />
            </div>
            <div className="containerLabelEndereco">
              <label>Bairro:</label>
              <Field
                name="Bairro"
                placeholder="Digite seu Bairro"
                type="text"
              />
            </div>
            <div className="containerLabelEndereco">
              <label>N°:</label>
              <Field
                name="Numero"
                placeholder="Digite seu Numero"
                type="text"
              />
            </div>
          </div>

          <div className="containerBtnEndereco">
            <div className="modal-close btnEndereco">
              <Button
                text="Voltar"
                position="bottom"
                typeButton="secundaria"
                Icon={MdReply}
              />
            </div>
            <div className="btnEndereco">
              <Button
                text="Salvar"
                position="bottom"
                type="submit"
                submit="submit"
                Icon={MdSave}
              />
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

ModalEstoque.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default ModalEstoque;
