import React, { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FiPackage } from "react-icons/fi";
import { MdReply, MdNotInterested, MdCheck } from "react-icons/md";
import { detalhesPedido, atualizarStatusPedido } from "../../services/pedido";

import ModalSituacaoPedido from "../../components/ModalSituacaoPedido";
import Button from "../../components/Button";

import "./styles.css";

const AlterarStatusPedido = ({ idPedido }) => {
  const { goBack } = useHistory();

  const handleAlterStatus = async (e, status) => {
    e.preventDefault();
    await atualizarStatusPedido(idPedido, status);
    goBack();
  };

  return (
    <div className="containerBtnDecisao">
      <div className="btns-decisao">
        <Button
          text="Aceitar"
          tooltip="Veja o status do pedido"
          Icon={MdCheck}
          onClick={(e) => handleAlterStatus(e, "ACEITO")}
        />
        <Button
          text="Recusar"
          typeButton="secundaria"
          Icon={MdNotInterested}
          onClick={(e) => handleAlterStatus(e, "NEGADO")}
        />
      </div>
    </div>
  );
};

export default function DetalhesPedido() {
  const [pedido, setPedido] = useState({});
  const { idPedido } = useParams();
  const { goBack } = useHistory();

  const getPedido = useCallback(async () => {
    const data = await detalhesPedido(idPedido);

    setPedido(data);
  }, [idPedido]);

  useEffect(() => {
    getPedido();
  }, [getPedido]);

  const {
    cliente = {},
    endereco = {},
    itensPedido = [],
    StatusPedido = "PENDENTE",
  } = pedido;
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

      {StatusPedido === "PENDENTE" && (
        <AlterarStatusPedido idPedido={idPedido} />
      )}

      <div className="containerDadosPedido">
        <div className="dados-comercio">
          <h2>Dados do comprador</h2>
          <div className="dadosComprador">
            <label className="descricaoDado">Nome:</label>
            <p>{cliente.nome}</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Numero:</label>
            <p>{cliente.telefone || ""}</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">CPF:</label>
            <p>{cliente.cpf}</p>
          </div>
        </div>

        <div className="dados-comercio">
          <h2>Endereço</h2>
          <div className="dadosComercio">
            <label className="descricaoDado">CEP:</label>
            <p>{endereco.cep}</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Cidade:</label>
            <p>{endereco.cidade}</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Rua:</label>
            <p>{endereco.logradouro}</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Complemento:</label>
            <p>{endereco.complemento || ""}</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">UF:</label>
            <p>{endereco.uf}</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Bairo:</label>
            <p>{endereco.bairro}</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">N°:</label>
            <p>{endereco.numero}</p>
          </div>
        </div>

        <div className="dados-comercio detalhes-pedido-dados-produto">
          <h2>Dados do(s) produto(s)</h2>
          <table className="responsive-table">
            <thead className="tableProdutosHead">
              <tr>
                <th>Nome:</th>
                <th>Preço:</th>
                <th>Quantidade:</th>
                <th>Caracteristicas:</th>
                <th>Valor total:</th>
              </tr>
            </thead>

            <tbody className="tableProdutosBody">
              {itensPedido.map((item) => {
                const { produto } = item;
                return (
                  <tr key={produto.id}>
                    <td>{produto.nome}</td>
                    <td>{item.valorProduto}</td>
                    <td>{item.quantidade}</td>
                    <td>{item.observacao}</td>
                    <td>{item.quantidade * item.valorProduto}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ModalSituacaoPedido idPedido={idPedido} />
    </>
  );
}
