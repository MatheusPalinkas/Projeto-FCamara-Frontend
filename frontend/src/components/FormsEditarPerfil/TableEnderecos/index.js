import React, { useState, useEffect, useCallback } from "react";
import { MdAdd } from "react-icons/md";

import Button from "../../Button";
import ModalEndereco from "../../ModalEndereco";

import { listarEnderecosCliente } from "../../../services/endereco";

import "../styles.css";
import "./styles.css";

const handleSubmitEnvia = (values) => alert(JSON.stringify(values));

function TableEnderecos({ id }) {
  const [enderecos, setEnderecos] = useState([]);

  const getEndereco = useCallback(async () => {
    try {
      const data = await listarEnderecosCliente(id);

      setEnderecos(data);
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  }, []);

  useEffect(() => {
    getEndereco();
  }, [getEndereco]);

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
                <span>{endereco.logradouro}</span>
              </td>
              <td>
                <span className="col-endereco"> {endereco.numero}</span>
              </td>
              <td className="col-editar-endereco">
                <span className="link  modal-trigger" data-target="modal4">
                  Editar
                </span>
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
          className="modal-trigger btn-salvar-dados-perfil"
          Icon={MdAdd}
          tipo="Button"
          dataTarget="modal4"
        />
      </div>

      <ModalEndereco handleSubmit={handleSubmitEnvia} initialValues={{}} />
    </>
  );
}

export default TableEnderecos;
