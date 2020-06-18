import React, { useEffect, useState } from "react";
import * as yup from "yup";
import PropTypes from "prop-types";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";
import "./styles.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Modal from "../Modal";
import Button from "../Button";

const validations = yup.object().shape({
  quantidade: yup
    .string()
    .required("O email não deve ser vazio"),
  categoria: yup
    .string()
    .required("A senha não deve ser vazia"),
});

const ModalEstoque = ({ handleSubmit, initialValues }) => {
  useEffect(() => {
    (async function () {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
    })();
  }, []);

  return(

  <Modal id={"modal2"}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      <FormikForm>

        <div className="titulo">
          <h1>Estoque</h1>
        </div>

        <div className="formLogin">
          <label>Quantidade em estoque</label>
        </div>
        <div className="formLogin">
          <Field 
          name="quantidade" 

          placeholder="Digite a quantidade em estoque"
          type="text" />
        </div>
        <div className="formLoginError">
          <ErrorMessage className="Foem-Error" component="span" name="quantidade" />
        </div>

        <div className="formLogin">
          <label>Status</label>
        </div>
        <div className="formLogin">
        <Field as="select" id="categoria" name="categoria" >
                <option>Selecione uma categoria</option>
                <option value="Disponivel">Disponivel</option>        
                <option value="Indisponivel">Indisponivel</option>
                <option value="Encomenda">Encomenda</option>
        </Field>
        </div>
        <div className="formLoginError">
          <ErrorMessage className="Form-Error" component="span" name="categoria" />
        </div>

        <div className="containerBtnLogin">
          <div className="btnLogin">
            <Button
              position="bottom"
              tooltip="Confirmar valor"
              type={"submit"}
              typeButton={"secundaria"}
              submit="submit"
              text={"CONFIRMA"}
            />
        </div>
        </div>
        </FormikForm>
    </Formik>
  </Modal>
);
}

ModalEstoque.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default ModalEstoque;
