import React, { useState } from "react";

import FormAvaliarComprador from "./FormAvaliarComprador";
import FormPedidoEntrega from "./FormPedidoEntrega";
import FormPedidoEnviado from "./FormPedidoEnviado";
import Modal from "../Modal";

import "./styles.css";

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
        <FormPedidoEnviado
          initialValues={{ pedidoEnviado }}
          onSubmit={(values) => {
            setPedidoEnviado(values.pedidoEnviado);
            setEtapa(etapa + 1);
          }}
        />
      )}
      {etapa === 1 && (
        <FormPedidoEntrega
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
