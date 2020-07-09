import React, { useState } from "react";
import { connect } from "react-redux";
import { RiEmotionLine } from "react-icons/ri";
import { MdSend } from "react-icons/md";
import { criarPedido } from "../../services/pedido";
import { criarEndereco } from "../../services/endereco";

import EscolherFormaPagamento from "./EscolherFormaPagamento";
import FormEnderecoEntrega from "./FormEnderecoEntrega";
import ListaEnderecos from "./ListaEnderecos";
import Button from "../Button";
import Modal from "../Modal";

import "./styles.css";

function ModalFinalizarCompra({ idUser, items }) {
  const [etapa, setEtapa] = useState(0);
  const [idEndereco, setIdEndereco] = useState(0);
  const [cadastrarNovoEndereco, setCadastrarNovoEndereco] = useState(true);

  const postPedido = async (observacao) => {
    try {
      const formPedido = {
        codigoCliente: idUser,
        codigoComercio: "5efcdbd9ae09ca6472a5f43b",
        codigoEndereco: idEndereco,
        itensPedido: [],
        observacao,
      };

      formPedido.itensPedido = items.map((item) => {
        return {
          codigoProduto: item.id,
          observacao: item.observacao || " ",
          quantidade: item.quantidade,
          valorProduto: item.preco,
        };
      });

      const data = await criarPedido(formPedido);
      return data;
    } catch (error) {
      alert("Erro", error);
    }
  };

  const postEndereco = async (endereco) => {
    try {
      const formEndereco = {
        ...endereco,
        cep: endereco.cep.replace("-", ""),
        logradouro: endereco.rua,
        complemento: endereco.complemento || " ",
        codigoDetentor: idUser,
      };

      delete formEndereco.rua;

      await criarEndereco("cliente", formEndereco);
      setCadastrarNovoEndereco(true);
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  };

  return (
    <Modal id="modal-finalizar-compra">
      {etapa === 0 && (
        <>
          <h2 className="titulo-finalizar-compra">Escolha o endereço</h2>
          {cadastrarNovoEndereco ? (
            <ListaEnderecos
              handleNewAddress={() => setCadastrarNovoEndereco(false)}
              handleContinue={() => {
                if (idEndereco === 0) {
                  alert("Selecione um endereço");
                  return;
                }

                setEtapa(etapa + 1);
              }}
              idToggle={idEndereco}
              handleToggleAddress={(id) => setIdEndereco(id)}
            />
          ) : (
            <FormEnderecoEntrega
              initialValues={{}}
              onSubmit={async (values) => {
                await postEndereco(values);
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
            onSubmit={async (values) => {
              const { observacao } = values;
              await postPedido(observacao);

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

const mapStateToProps = (state) => ({
  idUser: state.user.id,
  items: state.carrinho.items,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalFinalizarCompra);
