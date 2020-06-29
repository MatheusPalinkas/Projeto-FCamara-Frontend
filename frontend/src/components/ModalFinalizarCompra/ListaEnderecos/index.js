import React, { useState, useEffect } from "react";
import { MdAdd, MdNavigateNext } from "react-icons/md";

import Button from "../../Button";
import "./styles.css";

const addresFakes = [
  {
    nome: "Casa",
    rua: "Antonio guilherme",
    numero: "1010",
    cidade: "São Vicente",
  },
  {
    nome: "Trabalho",
    rua: "Praça dos Expedicionários",
    numero: "19",
    cidade: "Santos",
  },
];

const ListaEnderecos = ({ handleNewAddress, handleContinue }) => {
  const [enderecos, setEnderecos] = useState([]);

  useEffect(() => {
    setEnderecos(addresFakes);
  }, []);

  return (
    <>
      <ul className="collection lista-enderecos-finalizar-pedido">
        {enderecos.map((endereco) => (
          <li className="collection-item item-lista-enderecos-finalizar-pedido">
            <span className="endereco-apelido">{endereco.nome}</span>
            <div className="endereco-descritivo">
              <span className="rua">{endereco.rua}</span>
              <span className="numero">{endereco.numero}</span>
              <span className="cidade">{endereco.cidade}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="btns-escolher-enderecos">
        <Button
          text="Novo endereço"
          Icon={MdAdd}
          onClick={handleNewAddress}
          typeButton="secundaria"
        />
        <Button
          text="Continuar"
          Icon={MdNavigateNext}
          onClick={handleContinue}
        />
      </div>
    </>
  );
};

export default ListaEnderecos;
