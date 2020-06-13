import React from "react";
import * as yup from "yup";
import PropTypes from "prop-types";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";
import Modal from "../Modal";
import Button from "../Button";

const validations = yup.object().shape({
  user: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const ModalLogin = ({ handleSubmit, initialValues }) => (
  <Modal>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      <FormikForm className="Form">
        <h1 className="Form-Welcome">ENTRAR</h1>
        <div className="Form-Group">
          <Field
            className="Form-Field"
            name="user"
            placeholder="Digite seu email"
            type="text"
          />
          <ErrorMessage className="Foem-Error" component="span" name="user" />
        </div>
        <div className="Form-Group">
          <Field
            className="Form-Field"
            name="password"
            placeholder="Digite sua senha"
            type="password"
          />
          <ErrorMessage
            className="Form-Error"
            component="span"
            name="password"
          />
        </div>

        <Button tipo={"submit"} text={"CRIAR" + "CONTA"} />

        <Button tipo={"submit"} typeButton={"secundaria"} Icon={FiLogIn} />
      </FormikForm>
    </Formik>
  </Modal>
);

ModalLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default ModalLogin;
