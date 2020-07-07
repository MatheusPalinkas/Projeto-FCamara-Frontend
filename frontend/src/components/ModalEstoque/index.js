import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MdSave } from "react-icons/md";
import { Formik, Form, Field } from "formik";
import M from "materialize-css/dist/js/materialize.min.js";

import Modal from "../Modal";
import Button from "../Button";

import "./styles.css";
import api from "../../services/Api";
/**
 * const [quantidade, setQuantidade] = useState(10);
 * onChange={(e) => setQuantidade(e.target.value)}
 * value={quantidade}
 */

const ModalEstoque = ({ handleSubmit, initialValues }) => {
  useEffect(() => {
    (async function () {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
      M.updateTextFields();
    })();
  }, []);

  const atualizaEstoque = async (values) => {
    const { quantidade } = values;
    const data = await api.put("/produto/estoque", {
      quantidade,
    });
  };

  return (
    <Modal tipo="login" id="modal2">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => await atualizaEstoque(values)}
      >
        <Form>
          <div className="titulo">
            <h1>ESTOQUE</h1>
          </div>

          <div className="input-field">
            <label htmlFor="quantidade">Quantidade</label>
            <Field name="quantidade" type="text" />
          </div>

          <div className="input-field">
            <Field as="select" name="status">
              <option>Status</option>
              <option value="Disponivel">Disponivel</option>
              <option value="Indisponivel">Indisponivel</option>
              <option value="Encomenda">Encomenda</option>
            </Field>
            <label htmlFor="status">Status</label>
          </div>

          <div className="containerBtnLogin">
            <div className="btnSalvarEstoque">
              <Button
                position="bottom"
                tooltip="Salvar alteraçoes"
                type="submit"
                submit="submit"
                text="SALVAR"
                Icon={MdSave}
              />
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

ModalEstoque.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default ModalEstoque;
