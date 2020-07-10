import React, { useEffect, useState, useCallback } from "react";
import { MdReply } from "react-icons/md";
import Modal from "../Modal";
import Button from "../Button";
import { getEndereco } from "../../services/endereco";

import "./styles.css";

const ModalSobre = ({ initialvalues }) => {
  const [endereco, setEndereco] = useState({});

  const getDadosEndereco = useCallback(async () => {
    if (initialvalues.codigoEndereco == undefined) return;
    const { codigoEndereco } = initialvalues;
    const data = await getEndereco(codigoEndereco);
    setEndereco(data);
  }, [initialvalues.codigoEndereco]);

  useEffect(() => {
    getDadosEndereco();
  }, [getDadosEndereco]);

  return (
    <Modal tipo="sobre" id="modal5">
      <div className="containerSobreComercio">
        <div className="dados-comercio">
          <h2>Sobre o comercio</h2>
          <div className="dadosComprador">
            <label className="descricaoDado">Nome:</label>
            <p>{initialvalues.nome}</p>
          </div>

          <div className="dadosComprador">
            <label className="descricaoDado">CNPJ:</label>
            <p> {initialvalues.cnpj} </p>
          </div>

          <div className="dadosComprador">
            <label className="descricaoDado">Abre:</label>
            <p> {initialvalues.horarioAbertura} </p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Fecha:</label>
            <p> {initialvalues.horarioFechamento} </p>
          </div>

          {initialvalues.pagamentoCartao ? (
            <div className="dadosComprador">
              <label className="descricaoDado">Aceitar cartão:</label>
              <p>Sim</p>
            </div>
          ) : (
            <div className="dadosComprador">
              <label className="descricaoDado">Aceitar cartão:</label>
              <p>Não</p>
            </div>
          )}

          {initialvalues.pagamentoDinheiro ? (
            <div className="dadosComprador">
              <label className="descricaoDado">Aceitar dinheiro:</label>
              <p>Sim</p>
            </div>
          ) : (
            <div className="dadosComprador">
              <label className="descricaoDado">Aceitar dinheiro:</label>
              <p>Não</p>
            </div>
          )}
          <div className="dadosComprador">
            <label className="descricaoDado">Abre:</label>
            <p> {initialvalues.horarioAbertura} </p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Fecha:</label>
            <p> {initialvalues.horarioFechamento} </p>
          </div>

          <div className="dadosComprador">
            <label className="descricaoDado">Tempo de entrega:</label>
            <p> {initialvalues.tempoEntrega} </p>
          </div>
        </div>

        <div className="dados-comercio">
          <h2 className="h2Endereco">Endereço</h2>
          <div className="dadosComercio">
            <label className="descricaoDado">CEP:</label>
            <p>{endereco.cep}</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Cidade:</label>
            <p>{endereco.cidade}</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Logradouro:</label>
            <p>{endereco.logradouro}</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Complemento:</label>
            <p>{endereco.complemento}</p>
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
        <Button
          className="modal-close btnVoltarSobre"
          text="Voltar"
          Icon={MdReply}
          typeButton="secundaria"
        />
      </div>
    </Modal>
  );
};

export default ModalSobre;
