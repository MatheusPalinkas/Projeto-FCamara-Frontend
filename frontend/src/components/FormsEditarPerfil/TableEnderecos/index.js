import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import Button from "../../Button";

import "../styles.css";
import "./styles.css";

const mocEnderecos = [
  {
    nome: "Casa",
    rua: "Antonio guilherme",
    numero: 1010,
    idEndereco: 10,
  },
  {
    nome: "Trabalho",
    rua: "Ana costa",
    numero: 4500,
    idEndereco: 11,
  },
  {
    nome: "Facu",
    rua: "Maria cristina",
    numero: 50,
    idEndereco: 12,
  },
];

function TableEnderecos({ id }) {
  const [enderecos] = useState(mocEnderecos);

  return (
    <>
      <table className="responsive-table highlight table-enderecos">
        <thead className="cabecalho-table-enderecos">
          <tr>
            <th>Nome</th>
            <th>Rua</th>
            <th>Numero</th>
            <th className="col-editar-endereco">Editar</th>
          </tr>
        </thead>
        <tbody>
          {enderecos.map((endereco) => (
            <tr key={endereco.idEndereco}>
              <td>
                <span className="col-endereco">{endereco.nome}</span>
              </td>
              <td>
                <span>{endereco.rua}</span>
              </td>
              <td>
                <span className="col-endereco"> {endereco.numero}</span>
              </td>
              <td className="col-editar-endereco">
                <Link to={`/dados/pedido/${endereco.idEndereco}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="div-add-novo-endereco">
        <Button
          submit="submit"
          tooltip="Adicionar novo endereço"
          text="Novo endereço"
          position="bottom"
          className="btn-salvar-dados-perfil"
          Icon={MdAdd}
        />
      </div>
    </>
  );
}

export default TableEnderecos;
