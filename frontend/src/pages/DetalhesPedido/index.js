import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { FiPackage } from "react-icons/fi";
import { MdReply, MdNotInterested, MdCheck } from "react-icons/md";

import ModalSituacaoPedido from "../../components/ModalSituacaoPedido";
import Button from "../../components/Button";

import "./styles.css";

const StatusPedido = ({ idComercio }) => (
  <div className="containerBtnDecisao">
    <div className="btns-decisao">
      <Button text="Aceitar" tooltip="Veja o status do pedido" Icon={MdCheck} />
      <Button text="Recusar" typeButton="secundaria" Icon={MdNotInterested} />
    </div>
  </div>
);

export default function DetalhesPedido() {
  const { idComercio } = useParams();
  const { goBack } = useHistory();

  return (
    <>
      <div className="containerBtnPedido">
        <a
          className="waves-effect waves-light  modal-trigger"
          href="#modal-situacao-pedido"
        >
          <Button
            text="Situação do pedido"
            tooltip="Veja o situação do pedido"
            Icon={FiPackage}
          />
        </a>

        <Button
          text="VOLTAR"
          typeButton="secundaria"
          Icon={MdReply}
          onClick={(e) => {
            e.preventDefault();
            goBack();
          }}
        />
      </div>

      <StatusPedido idComercio={idComercio} />

      <div className="containerDadosPedido">
        <div className="containerdadosComprador">
          <h2>Dados do comprador</h2>
          <div className="dadosComprador">
            <label className="descricaoDado">Nome:</label>
            <p>Jose</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Numero:</label>
            <p>99999-9999</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">CPF:</label>
            <p>999.999.999-99</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Pagamento:</label>
            <p>cartão</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">email:</label>
            <p>Jose@teste.com</p>
          </div>
        </div>

        <div className="dados-comercio">
          <h2>Endereço</h2>
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

        <div className="dados-comercio">
          <h2>Dados do(s) produto(s)</h2>
          <div className="dadosProdutos">
            <label className="descricaoDado">Nome:</label>
            <p>Celta amarelo</p>
          </div>
          <div className="dadosProdutos">
            <label className="descricaoDado">Preço:</label>
            <p>R$ 5,00</p>
          </div>
          <div className="dadosProdutos">
            <label className="descricaoDado">Quantidade:</label>
            <p>1</p>
          </div>
          <div className="dadosProdutos">
            <label className="descricaoDado">Caracteristicas:</label>
            <p>blablablabla</p>
          </div>
        </div>
      </div>

      <ModalSituacaoPedido />
    </>
  );
}
