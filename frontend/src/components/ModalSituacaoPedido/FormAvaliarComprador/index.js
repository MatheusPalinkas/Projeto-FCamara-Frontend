import React, { useState } from "react";
import { MdReply, MdCheck } from "react-icons/md";
import { Field, Form, Formik } from "formik";

import Button from "../../Button";

const FormAvaliarComprador = ({ initialValues, onSubmit }) => {
  const [houveProblema, setHouveProblema] = useState(true);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="form-pedido-entrega">
        <div>
          <label className="lbl-pedido-entrega">Teve algum problema ?</label>
          <div className="div-radios-form div-form-pedido-entrega">
            <p>
              <label htmlFor="Sim">
                <Field
                  name="houveProblema"
                  type="radio"
                  value="true"
                  id="Sim"
                />
                <span>Sim</span>
              </label>
            </p>
            <p>
              <label htmlFor="Nao">
                <Field
                  name="houveProblema"
                  type="radio"
                  value="false"
                  id="Nao"
                />
                <span>Não</span>
              </label>
            </p>
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="complemento">Fale sobre o problema</label>
          <Field
            name="complemento"
            className="materialize-textarea"
            type="text"
            id="complemento"
          />
        </div>
        <div>
          <label className="lbl-pedido-entrega">
            Dé uma nota de 1 a 5 para o cliente
          </label>
          <div className="div-radios-form div-form-nota-usuario">
            <p>
              <label htmlFor="star-1">
                <Field name="nota" type="radio" value="1" id="star-1" />
                <span>1</span>
              </label>
            </p>
            <p>
              <label htmlFor="star-2">
                <Field name="nota" type="radio" value="2" id="star-2" />
                <span>2</span>
              </label>
            </p>
            <p>
              <label htmlFor="star-3">
                <Field name="nota" type="radio" value="3" id="star-3" />
                <span>3</span>
              </label>
            </p>
            <p>
              <label htmlFor="star-4">
                <Field name="nota" type="radio" value="4" id="star-4" />
                <span>4</span>
              </label>
            </p>
            <p>
              <label htmlFor="star-5">
                <Field name="nota" type="radio" value="5" id="star-5" />
                <span>5</span>
              </label>
            </p>
          </div>
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
};

export default FormAvaliarComprador;
