import React from "react";
import * as yup from "yup";
import PropTypes from "prop-types";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";
import "./styles.css";

import Modal from "../Modal";
import Button from "../Button";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("O email deve ser valido")
    .required("O email não deve ser vazio"),
  senha: yup
    .string()
    .min(8, "A senha deve ter mais de 8 caracteris")
    .required("A senha não deve ser vazia"),
});

const ModalEstoque = ({ handleSubmit, initialValues }) => (
  <Modal tipo={"login"} id={"modal2"}>
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
          <label>Email</label>
        </div>
        <div className="formLogin">
          <Field name="email" placeholder="Digite seu email" type="text" />
        </div>
        <div className="formLoginError">
          <ErrorMessage className="Foem-Error" component="span" name="email" />
        </div>

        <div className="formLogin">
          <label>Categoria</label>
        </div>
        <div className="input-field ">
          <Field as="select" id="categoria" name="categoria">
            <option>Selecione uma categoria</option>
            <option value="Disponivel">Disponivel</option>
            <option vaalue="Indisponivel">Indisponivel</option>
          </Field>
        </div>
        <div className="formLoginError">
          <ErrorMessage className="Form-Error" component="span" name="senha" />
        </div>

        <div className="containerBtnLogin">
          <div className="btnLogin">
            <Button
              position="bottom"
              tooltip="Entrar na minha conta"
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

ModalEstoque.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default ModalEstoque;
