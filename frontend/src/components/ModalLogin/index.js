import React from "react";
import * as yup from "yup";
import PropTypes from "prop-types";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";
import { MdPersonAdd } from "react-icons/md";
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

const ModalLogin = ({ handleSubmit, initialValues }) => (
  <Modal tipo={"login"}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      <FormikForm>
        <div className="titulo">
          <h1>ENTRAR</h1>
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
          <label>Senha</label>
        </div>
        <div className="formLogin">
          <Field name="senha" placeholder="Digite sua senha" type="password" />
        </div>
        <div className="formLoginError">
          <ErrorMessage className="Form-Error" component="span" name="senha" />
        </div>

        <div className="containerBtn">
          <div className="btnLogin">
            <Button text={"CRIAR CONTA"} Icon={MdPersonAdd} />
          </div>
          <div className="btnLogin">
            <Button
              Icon={FiLogIn}
              tipo={"submit"}
              position="bottom"
              tooltip="Entrar na minha conta"
              type={"submit"}
            />
          </div>
        </div>
      </FormikForm>
    </Formik>
  </Modal>
);

ModalLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default ModalLogin;
