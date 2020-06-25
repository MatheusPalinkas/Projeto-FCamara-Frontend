import React from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import { MdPersonAdd } from "react-icons/md";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { HANDLE_LOGIN } from "../../store/actions/user";

import Modal from "../Modal";
import Button from "../Button";

import "./styles.css";

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
const initialValues = {};

const userFake = {
  idComercio: 2,
  id: 2,
  url:
    "https://static1.purepeople.com.br/articles/7/28/80/37/@/3267022-larissa-manoela-chamou-atencao-dos-segui-624x600-2.jpg",
};

const ModalLogin = ({ handleLogin }) => (
  <Modal tipo="login" id="modal1">
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleLogin(userFake)}
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
          <div className="modal-close btnLogin">
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
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (user) => dispatch(HANDLE_LOGIN(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
