import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { MdAdd } from "react-icons/md";
import { listarEnderecosCliente } from "../../../services/endereco";

import Button from "../../Button";
import "./styles.css";

const ListaEnderecos = ({
  handleNewAddress,
  handleContinue,
  handleToggleAddress,
  idToggle,
  idUser,
}) => {
  const [enderecos, setEnderecos] = useState([]);

  const getEnderecos = useCallback(async () => {
    const data = await listarEnderecosCliente(idUser);
    setEnderecos(data);
  }, [idUser]);

  useEffect(() => {
    getEnderecos();
  }, [getEnderecos]);

  return (
    <>
      <ul className="collection lista-enderecos-finalizar-pedido">
        {enderecos.map((endereco) => (
          <li
            key={endereco.id}
            className={`collection-item item-lista-enderecos-finalizar-pedido ${
              idToggle === endereco.id ? " ativo" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleToggleAddress(endereco.id);
            }}
          >
            <span className="endereco-apelido">{endereco.nome}</span>
            <div className="endereco-descritivo">
              <span className="rua">{endereco.logradouro}</span>
              <span className="numero">{endereco.numero}</span>
              <span className="cidade">{endereco.cidade}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="btns-escolher-enderecos btns-voltar-seguir-finalizar-compra">
        <Button
          text="Novo endereço"
          Icon={MdAdd}
          onClick={handleNewAddress}
          typeButton="secundaria"
        />
        <Button
          text="Continuar"
          onClick={handleContinue}
          className="btn-continuar-finalizar-compra"
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  idUser: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListaEnderecos);
