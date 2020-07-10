import React, { useState, useEffect, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import { criarEndereco, alterarEndereco } from "../../../services/endereco";
import M from "materialize-css/dist/js/materialize.min.js";

import Button from "../../Button";
import ModalEndereco from "../../ModalEndereco";

import { listarEnderecosCliente } from "../../../services/endereco";

import "../styles.css";
import "./styles.css";

function TableEnderecos({ id }) {
  const [openModalEndereco, setOpenModalEndereco] = useState(false);
  const [selectedEndereco, setSelectedEndereco] = useState({});
  const [enderecos, setEnderecos] = useState([]);

  const getEndereco = useCallback(async () => {
    try {
      const data = await listarEnderecosCliente(id);
      setEnderecos(data);
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  }, [id]);

  useEffect(() => {
    getEndereco();
  }, [getEndereco, openModalEndereco]);

  useEffect(() => {
    if (openModalEndereco) openModal();
  }, [openModalEndereco]);

  const handleSubmitModalEndereco = async (values) => {
    const formEndereco = {
      ...values,
      logradouro: values.rua,
      complemento: values.complemento || " ",
    };

    delete formEndereco.rua;

    if (selectedEndereco.id) {
      delete formEndereco.nome;
      formEndereco.id = selectedEndereco.id;
      await alterarEndereco(formEndereco);
      return;
    }

    await criarEndereco("cliente", { ...formEndereco, codigoDetentor: id });
  };

  const openModal = () => {
    const elem = document.querySelector("#modal4");
    var instance = M.Modal.getInstance(elem);
    instance.open();
  };
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
            <tr key={endereco.id}>
              <td>
                <span className="col-endereco">{endereco.nome}</span>
              </td>
              <td>
                <span>{endereco.logradouro}</span>
              </td>
              <td>
                <span className="col-endereco"> {endereco.numero}</span>
              </td>
              <td
                className="col-editar-endereco"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedEndereco({
                    ...endereco,
                    rua: endereco.logradouro,
                  });
                  setOpenModalEndereco(true);
                }}
              >
                <span className="link">Editar</span>
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
          tipo="Button"
          onClick={(e) => {
            e.preventDefault();
            setSelectedEndereco({});
            setOpenModalEndereco(true);
          }}
        />
      </div>

      <ModalEndereco
        handleSubmit={handleSubmitModalEndereco}
        initialValues={selectedEndereco}
      />
    </>
  );
}

export default TableEnderecos;
