import React from "react";
import { MdReply, MdCheck } from "react-icons/md";
import { Field, Form, Formik } from "formik";

import Button from "../../Button";

const FormPedidoEnviado = ({ initialValues, onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form className="form-pedido-enviado">
      <label className="lbl-pedido-enviado">Você já enviou o pedido ?</label>
      <div className="div-radios-form div-form-pedido-enviado">
        <p>
          <label htmlFor="Sim">
            <Field name="pedidoEnviado" type="radio" value="true" id="Sim" />
            <span>Sim</span>
          </label>
        </p>
        <p>
          <label htmlFor="Nao">
            <Field name="pedidoEnviado" type="radio" value="false" id="Nao" />
            <span>Não</span>
          </label>
        </p>
      </div>
      <div className="btns-situacao-pedido">
        <Button
          text="Sair"
          typeButton="secundaria"
          submit="submit"
          className="modal-close btn-fechar-modal-situacao-pedido"
          Icon={MdReply}
          tooltip="Fechar"
          position="bottom"
        />
        <Button
          text="Confirmar"
          submit="submit"
          Icon={MdCheck}
          tooltip="Confirmar situação"
          position="bottom"
        />
      </div>
    </Form>
  </Formik>
);

export default FormPedidoEnviado;
