import React from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
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
const handleSubmit = (values) => console.log(JSON.stringify(values));
const initialValues = {};

const ModalLogin = () => (
  <Modal tipo={"login"} id={"modal1"}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      <Form className="form-modal-login">
        <div className="titulo">
          <h1>ENTRAR</h1>
        </div>
        <div className="input-field">
          <label>Email</label>
          <Field name="email" placeholder="Digite seu email" type="text" />
          <ErrorMessage className="helper-text" component="span" name="email" />
        </div>
        <div className="input-field">
          <label>Senha</label>
          <Field name="senha" placeholder="Digite sua senha" type="password" />
          <ErrorMessage className="helper-text" component="span" name="senha" />
        </div>

        <div className="containerBtnLogin">
          <div className="modal-close btnLogin">
            <Button
              text="CRIAR CONTA"
              tooltip="Criar uma nova conta"
              position="bottom"
              Icon={MdPersonAdd}
              tipo="Link"
              to="/cadastro"
            />
          </div>

          <div className="btnLogin">
            <Button
              Icon={FiLogIn}
              position="bottom"
              tooltip="Entrar na minha conta"
              type="submit"
              typeButton="secundaria"
              submit="submit"
            />
          </div>
        </div>
      </Form>
    </Formik>
  </Modal>
);

export default ModalLogin;
