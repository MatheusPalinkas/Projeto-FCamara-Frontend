import React, { useEffect, useState, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MdReply, MdCancel } from "react-icons/md";
import { getEndereco } from "../../services/endereco";
import { detalhesPedido, atualizarStatusPedido } from "../../services/pedido";

import Card from "../../components/Card";
import Button from "../../components/Button";

import "./styles.css";

const StatusPedido = ({ id }) => {
  const { goBack } = useHistory();
  return (
    <div className="containerBtnPedidoClienteCancelar">
      <Button
        text="CANCELAR"
        Icon={MdCancel}
        tooltip="Cancelar pedido"
        typeButton="secundaria"
        onClick={async (e) => {
          e.preventDefault();
          await atualizarStatusPedido(id, "cancelado");
          goBack();
        }}
      />
    </div>
  );
};

const CartsPedido = ({ item }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(item);
  }, [item]);

  return produtos.map((produto) => {
    const { id, nome, urlFoto, descricao } = produto.produto;
    return (
      <Card
        key={id}
        titulo={nome}
        url={urlFoto}
        descricao={descricao}
        produto={{ preco: produto.valorProduto }}
        quantidade={produto.quantidade}
      />
    );
  });
};

export default function PedidoCliente() {
  const [pedido, setPedido] = useState({
    itensPedido: [],
    total: "0",
    frete: "0",
    comercio: { endereco: {} },
  });
  const [endereco, setEndereco] = useState({});

  const { idPedido } = useParams();
  const { goBack } = useHistory();

  const getEnderecoComercio = useCallback(async () => {
    if (pedido.comercio.codigoEndereco === undefined) return;
    const data = await getEndereco(pedido.comercio.codigoEndereco);
    setEndereco(data);
  }, [pedido]);

  const getPedido = useCallback(async () => {
    const data = await detalhesPedido(idPedido);
    setPedido(data);
  }, [idPedido]);

  useEffect(() => {
    getPedido();
    getEnderecoComercio();
  }, [getPedido, getEnderecoComercio]);

  const { statusPedido } = pedido;
  return (
    <>
      <div className="containerBtnPedidoCliente">
        <div className="containerStatus">
          <div className="statusPedido">
            <label className="descricaoDado">Status do pedido:</label>
            <p>{statusPedido}</p>
          </div>

          {statusPedido === "PENDENTE" && <StatusPedido id={idPedido} />}
        </div>

        <Button
          className="btnVoltarpedido"
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
            <CartsPedido item={pedido.itensPedido} />
          </div>
          <div className="dadosCompradorTotal">
            <label className="descricaoDado">Valor total:</label>
            <p>
              {pedido.total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>

        <div className="containerdadosComprador">
          <h2>Dados do Comercio</h2>
          <div className="dadosComprador">
            <label className="descricaoDado">Nome do comercio:</label>
            <p>{pedido.comercio.nome}</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">CPF/CNPJ:</label>
            <p>{pedido.comercio.cnpj || pedido.comercio.cpf}</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Frete:</label>
            <p>
              {pedido.frete.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>

        <div className="containerdadosComprador">
          <h2>Endereço do Comercio</h2>
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
      </div>
    </>
  );
}
