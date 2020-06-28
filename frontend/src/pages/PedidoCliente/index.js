import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MdReply, MdCancel } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";
import api from "../../services/Api";

import Card from "../../components/Card";
import Button from "../../components/Button";

import "./styles.css";

const StatusPedido = ({ idComercio }) => (
  <div className="containerBtnPedidoClienteCancelar">
    <Button
      text="CANCELAR"
      Icon={MdCancel}
      tooltip="Cancelar pedido"
      typeButton="secundaria"
    />
  </div>
);

export default function PedidoCliente() {
  const [produtos, setProdutos] = useState([]);
  const { idComercio } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    (async function () {
      const [dataProdutos] = await Promise.all([
        api.get(`/produtos?idComercio=${idComercio}`),
      ]);

      setProdutos(dataProdutos.data);

      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
    })();
  }, [idComercio]);

  return (
    <>
      <div className="containerBtnPedidoCliente">
        <div className="statusPedido">
          <label className="descricaoDado">Status do pedido:</label>
          <p>Pendente</p>
        </div>

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

      <div className="containerDadosPedidoCliente">
        <div className="containerdadosComprador">
          <h2>Produtos Comprados</h2>
          <div className="container-comercios">
            {produtos.map((produto) => (
              <Card
                key={produto.id}
                titulo={produto.nome}
                url={produto.url}
                descricao={produto.descricao}
                produto={{ preco: produto.preco }}
                idCliente="teste"
              />
            ))}
          </div>
          <StatusPedido idComercio={idComercio} />
        </div>

        <div className="containerdadosComprador">
          <h2>Dados do Comercio</h2>
          <div className="dadosComprador">
            <label className="descricaoDado">Nome do comercio:</label>
            <p>Padaria do zé</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">CPF/CNPJ:</label>
            <p>999.999.999-99</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Numero:</label>
            <p>99999-9999</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">email:</label>
            <p>Jose@teste.com</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Frete:</label>
            <p>R$200,00</p>
          </div>
        </div>

        <div className="dados-comercio">
          <h2>Endereço do Comercio</h2>
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
      </div>
    </>
  );
}
