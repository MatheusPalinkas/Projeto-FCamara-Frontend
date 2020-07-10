import React, { useState } from "react";
import { atualizarStatusPedido } from "../../services/pedido";

import FormAvaliarComprador from "./FormAvaliarComprador";
import FormPedidoEntrega from "./FormPedidoEntrega";
import FormPedidoEnviado from "./FormPedidoEnviado";
import Modal from "../Modal";

import "./styles.css";

const ModalSituacaoPedido = ({ idPedido }) => {
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
          onSubmit={async (values) => {
            setPedidoEnviado(values.pedidoEnviado);

            if (values.pedidoEnviado === "true") {
              setEtapa(etapa + 1);
              await atualizarStatusPedido(idPedido, "ENVIADO");
              return;
            }

            alert("Para continuar é preciso enviar o produto primeiro");
          }}
        />
      )}
      {etapa === 1 && (
        <FormPedidoEntrega
          initialValues={{ pedidoEntregue }}
          onSubmit={async (values) => {
            setPedidoEntregue(values.pedidoEntregue);

            if (values.pedidoEntregue === "true") {
              setEtapa(etapa + 1);
              await atualizarStatusPedido(idPedido, "ENTREGUE");
              return;
            }

            alert("Para continuar é preciso que o produto tenha sido entregue");
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
