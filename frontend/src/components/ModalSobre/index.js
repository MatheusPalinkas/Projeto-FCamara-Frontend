import React from "react";
import { MdReply } from "react-icons/md";
import Modal from "../Modal";
import Button from "../Button";

import "./styles.css";

const ModalSobre = () => (
  <Modal tipo="sobre" id="modal5">
    <div className="containerSobreComercio">
      <div className="dados-comercio">
        <h2>Sobre o comercio</h2>
        <div className="dadosComprador">
          <label className="descricaoDado">Nome:</label>
          <p>Jose</p>
        </div>

        <div className="dadosComprador">
          <label className="descricaoDado">CPF/CNPJ:</label>
          <p>999.999.999-99</p>
        </div>
        <div className="dadosComprador">
          <label className="descricaoDado">Formas de pagamentos aceitos:</label>
          <p>cartão e dinheiro</p>
        </div>
        <div className="dadosComprador">
          <label className="descricaoDado">Numero:</label>
          <p>99999-9999</p>
        </div>
        <div className="dadosComprador">
          <label className="descricaoDado">email:</label>
          <p>Jose@teste.com</p>
        </div>
      </div>

      <div className="dados-comercio">
        <h2 className="h2Endereco">Endereço</h2>
        <div className="dadosComercio">
          <label className="descricaoDado">CEP:</label>
          <p>99999-999</p>
        </div>
        <div className="dadosComercio">
          <label className="descricaoDado">Cidade:</label>
          <p>Santos</p>
        </div>
        <div className="dadosComercio">
          <label className="descricaoDado">Logradouro:</label>
          <p>Rua sei la</p>
        </div>
        <div className="dadosComercio">
          <label className="descricaoDado">Complemento:</label>
          <p></p>
        </div>
        <div className="dadosComercio">
          <label className="descricaoDado">UF:</label>
          <p>SP</p>
        </div>
        <div className="dadosComercio">
          <label className="descricaoDado">Bairo:</label>
          <p>logo ali</p>
        </div>
        <div className="dadosComercio">
          <label className="descricaoDado">N°:</label>
          <p>999</p>
        </div>
      </div>
      <Button
        className="modal-close btnVoltarSobre"
        text="Voltar"
        Icon={MdReply}
        typeButton="secundaria"
      />
    </div>
  </Modal>
);

export default ModalSobre;
