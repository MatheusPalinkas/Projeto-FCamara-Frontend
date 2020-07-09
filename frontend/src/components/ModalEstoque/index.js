import React, { useEffect, useState } from "react";
import { MdSave } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateProduto } from "../../services/produto";

import Modal from "../Modal";
import Button from "../Button";

import "./styles.css";

const ModalEstoque = ({ initialValues, idProduto, updateProdutos }) => {
  const [status, setStatus] = useState("");
  const [quantidade, setQuantidade] = useState("");

  useEffect(() => {
    setStatus(initialValues.status);
    setQuantidade(initialValues.quantidade);
  }, [initialValues]);

  useEffect(() => {
    (async function () {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
      M.updateTextFields();
    })();
  }, [quantidade]);

  const updateEstoque = async (e) => {
    e.preventDefault();
    const formEstoque = {
      id: idProduto,
      produtoEmEstoque: status === "Disponivel",
      quantidade: quantidade || "0",
    };

    await updateProduto(formEstoque);
    updateProdutos();
  };

  const handleOptionChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Modal tipo="login" id="modal-alterar-quantidade">
      <form onSubmit={updateEstoque}>
        <div className="titulo">
          <h1>PRODUTO</h1>
        </div>

        <div className="input-field">
          <div className="div-radio">
            <p>
              <label htmlFor="Disponivel">
                <input
                  name="status"
                  type="radio"
                  value="Disponivel"
                  id="Disponivel"
                  checked={status === "Disponivel"}
                  onChange={handleOptionChange}
                />
                <span>Disponivel</span>
              </label>
            </p>
            <p>
              <label htmlFor="Indisponivel">
                <input
                  name="status"
                  type="radio"
                  value="Indisponivel"
                  id="Indisponivel"
                  checked={status === "Indisponivel"}
                  onChange={handleOptionChange}
                />
                <span>Indisponivel</span>
              </label>
            </p>
          </div>
        </div>

        {initialValues.tipo === "estoque" && (
          <div className="input-field quantidadeModal">
            <label className="labelQuantidadeModal" htmlFor="quantidade">
              Quantidade do produto
            </label>
            <input
              name="quantidade"
              type="text"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
        )}

        <div className="containerBtnLogin">
          <div className="btnSalvarEstoque">
            <Button
              className="modal-close"
              position="bottom"
              tooltip="Salvar alteraçoes"
              type="submit"
              submit="submit"
              text="SALVAR"
              Icon={MdSave}
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEstoque;
