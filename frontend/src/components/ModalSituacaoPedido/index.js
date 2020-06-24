import React, { useState } from "react";
import { MdReply, MdCheck } from "react-icons/md";
import { Field, Form, Formik } from "formik";

import Button from "../Button";
import Modal from "../Modal";

import "./styles.css";

const FormPedioEnviado = ({ initialValues, onSubmit }) => (
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

const FormPedioEntrega = ({ initialValues, onSubmit }) => (
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

const FormAvaliarComprador = ({ initialValues, onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form className="form-pedido-entrega">
      <div>
        <label className="lbl-pedido-entrega">Teve algum problema ?</label>
        <div className="div-radios-form div-form-pedido-entrega">
          <p>
            <label htmlFor="Sim">
              <Field name="houveProblema" type="radio" value="true" id="Sim" />
              <span>Sim</span>
            </label>
          </p>
          <p>
            <label htmlFor="Nao">
              <Field name="houveProblema" type="radio" value="false" id="Nao" />
              <span>Não</span>
            </label>
          </p>
        </div>
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

const ModalSituacaoPedido = () => {
  const [etapa, setEtapa] = useState(0);
  const [nota, setNota] = useState("5");
  const [houveProblema, setHouveProblema] = useState("false");
  const [pedidoEnviado, setPedidoEnviado] = useState("false");
  const [pedidoEntregue, setPedidoEntregue] = useState("false");

  return (
    <Modal tipo="modal-situacao-pedido" id="modal-situacao-pedido">
      <h2 className="titulo-pedido-enviado">Situação pedidos</h2>
      {etapa === 0 && (
        <FormPedioEnviado
          initialValues={{ pedidoEnviado }}
          onSubmit={(values) => {
            setPedidoEnviado(values.pedidoEnviado);
            setEtapa(etapa + 1);
          }}
        />
      )}
      {etapa === 1 && (
        <FormPedioEntrega
          initialValues={{ pedidoEntregue }}
          onSubmit={(values) => {
            setPedidoEntregue(values.pedidoEntregue);
            setEtapa(etapa + 1);
          }}
        />
      )}
      {etapa === 2 && (
        <FormAvaliarComprador
          initialValues={{ houveProblema, nota }}
          onSubmit={(values) => {
            setHouveProblema(values.houveProblema);
            setNota(values.nota);
          }}
        />
      )}
    </Modal>
  );
};

export default ModalSituacaoPedido;
