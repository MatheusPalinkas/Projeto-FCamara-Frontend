import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";

import Button from "../../Button";
import "./styles.css";

const addresFakes = [
  {
    id: 1,
    nome: "Casa",
    rua: "Antonio guilherme",
    numero: "1010",
    cidade: "São Vicente",
  },
  {
    id: 2,
    nome: "Trabalho",
    rua: "Praça dos Expedicionários",
    numero: "19",
    cidade: "Santos",
  },
];

const ListaEnderecos = ({
  handleNewAddress,
  handleContinue,
  handleToggleAddress,
  idToggle,
}) => {
  const [enderecos, setEnderecos] = useState([]);

  useEffect(() => {
    setEnderecos(addresFakes);
  }, []);

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
              <span className="rua">{endereco.rua}</span>
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

export default ListaEnderecos;
