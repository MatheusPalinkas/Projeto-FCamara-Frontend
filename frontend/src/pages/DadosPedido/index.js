import React from "react";

import "./styles.css";
import { MdReply } from "react-icons/md";
import { MdNotInterested } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { FiGift } from "react-icons/fi";

import Button from "../../components/Button";

const StatusPedido = ({ idComercio }) => (
  <div className="containerBtnDecisao">
    <div className="btnDecisao">
      <Button text="Aceitar" tooltip="Veja o status do pedido" Icon={MdCheck} />
    </div>
    <div className="btnDecisao">
      <Button
        text={"Recusar"}
        typeButton={"secundaria"}
        Icon={MdNotInterested}
      />
    </div>
  </div>
);

export default function DadosPedido({ idComercio }) {
  return (
    <>
      <div className="containerBtnPedido">
        <div className="btnVendedorPedido">
          <Button
            text="Status do pedido"
            tooltip="Veja o status do pedido"
            Icon={FiGift}
          />
        </div>
        <div className="btnVendedorPedido">
          <Button text={"VOLTAR"} typeButton={"secundaria"} Icon={MdReply} />
        </div>
      </div>

      <StatusPedido idComercio={idComercio} />

      <div className="containerDadosPedido">
        <div className="containerdadosComprador">
          <h2>Dados do comprador</h2>
          <div className="dadosComprador">
            <label className="descricaoDado">Nome:</label>
            <label>Jose</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Numero:</label>
            <label>99999-9999</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">CPF:</label>
            <label>999.999.999-99</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Pagamento:</label>
            <label>cartão</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">email:</label>
            <label>Jose@teste.com</label>
          </div>
        </div>

        <div className="dados-comercio">
          <h2>Endereço</h2>
          <div className="dadosComprador">
            <label className="descricaoDado">CEP:</label>
            <label>99999-999</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Cidade:</label>
            <label>Santos</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Logradouro:</label>
            <label>Rua sei la</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Complemento:</label>
            <label></label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">UF:</label>
            <label>SP</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Bairo:</label>
            <label>logo ali</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">N°:</label>
            <label>999</label>
          </div>
        </div>

        <div className="dados-comercio">
          <h2>Dados do(s) produto(s)</h2>
          <div className="dadosComprador">
            <label className="descricaoDado">Nome:</label>
            <label>Celta amarelo</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Preço:</label>
            <label>R$ 5,00</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Quantidade:</label>
            <label>1</label>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Caracteristicas:</label>
            <label>blablablabla</label>
          </div>
        </div>
      </div>
    </>
  );
}
