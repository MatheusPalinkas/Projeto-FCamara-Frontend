import React from "react";
import { MdReply, MdCheck } from "react-icons/md";
import { Field, Form, Formik } from "formik";

import Button from "../../Button";

const FormPedidoEntrega = ({ initialValues, onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form className="form-pedido-entrega">
      <label className="lbl-pedido-entrega">Você já entregou o pedido ?</label>
      <div className="div-radios-form div-form-pedido-entrega">
        <p>
          <label htmlFor="Sim">
            <Field name="pedidoEntregue" type="radio" value="true" id="Sim" />
            <span>Sim</span>
          </label>
        </p>
        <p>
          <label htmlFor="Nao">
            <Field name="pedidoEntregue" type="radio" value="false" id="Nao" />
            <span>Não</span>
          </label>
        </p>
      </div>
      <div className="btns-situacao-pedido">
        <Button
          text="Sair"
          typeButton="secundaria"
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

export default FormPedidoEntrega;
