import React, { useState } from "react";

import FormEnderecoEntrega from "./FormEnderecoEntrega";
import ListaEnderecos from "./ListaEnderecos";
import Modal from "../Modal";

import "./styles.css";

function ModalFinalizarCompra() {
  const [cadastrarNovoEndereco, setCadastrarNovoEndereco] = useState(true);

  return (
    <Modal id="modal-finalizar-compra">
      <h2 className="titulo-finalizar-compra">Escolha o endereço</h2>
      {cadastrarNovoEndereco ? (
        <ListaEnderecos
          handleNewAddress={() => setCadastrarNovoEndereco(false)}
          handleContinue={() => {}}
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
    </Modal>
  );
}

export default ModalFinalizarCompra;
