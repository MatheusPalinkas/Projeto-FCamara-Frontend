import React, { useState } from "react";
import { RiEmotionLine } from "react-icons/ri";
import { MdSend } from "react-icons/md";

import EscolherFormaPagamento from "./EscolherFormaPagamento";
import FormEnderecoEntrega from "./FormEnderecoEntrega";
import ListaEnderecos from "./ListaEnderecos";
import Button from "../Button";
import Modal from "../Modal";

import "./styles.css";

function ModalFinalizarCompra() {
  const [etapa, setEtapa] = useState(0);
  const [cadastrarNovoEndereco, setCadastrarNovoEndereco] = useState(true);

  return (
    <Modal id="modal-finalizar-compra">
      {etapa === 0 && (
        <>
          <h2 className="titulo-finalizar-compra">Escolha o endereço</h2>
          {cadastrarNovoEndereco ? (
            <ListaEnderecos
              handleNewAddress={() => setCadastrarNovoEndereco(false)}
              handleContinue={() => {
                setEtapa(etapa + 1);
              }}
            />
          ) : (
            <FormEnderecoEntrega
              initialValues={{}}
              onSubmit={(values) => {
                console.log(values);
                setCadastrarNovoEndereco(true);
              }}
              handleBack={() => setCadastrarNovoEndereco(true)}
            />
          )}
        </>
      )}

      {etapa === 1 && (
        <>
          <h2 className="titulo-finalizar-compra">
            Escolha a forma de pagamento
          </h2>
          <EscolherFormaPagamento
            initialValues={{}}
            onSubmit={(values) => {
              console.log(values);
              setEtapa(etapa + 1);
            }}
            handleBack={() => setEtapa(etapa - 1)}
          />
        </>
      )}
      {etapa === 2 && (
        <>
          <h2 className="titulo-finalizar-compra-pedido-enviado">
            Seu pedido foi enviado
          </h2>
          <span className="observacao-pedido-enviado">
            Fique de olho na pagina dos seus pedidos{" "}
            <RiEmotionLine size={24} color="#F46825" />
          </span>
          <Button
            text="Concluir"
            className="modal-close btn-pedido-enviado"
            Icon={MdSend}
          />
        </>
      )}
    </Modal>
  );
}

export default ModalFinalizarCompra;
