import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MdSave } from "react-icons/md";
import { Formik, Form, Field } from "formik";
import M from "materialize-css/dist/js/materialize.min.js";
import api from "../../services/Api";

import Modal from "../Modal";
import Button from "../Button";

import "./styles.css";
/**
 * const [quantidade, setQuantidade] = useState(10);
 * onChange={(e) => setQuantidade(e.target.value)}
 * value={quantidade}
 */

const ModalEstoque = ({
  id,
  initialValues,
  produtoDemanda,
  produtoEstoque,
}) => {
  useEffect(() => {
    (async function () {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
      M.updateTextFields();
    })();
  }, []);

  const handleSubmit = async (values) => {
    const { quantidade } = values;
    const produtoEmEstoque = true;
    const data = await api.put("/produto/estoque", {
      id,
      produtoEmEstoque,
      quantidade,
    });
  };

  return (
    <Modal tipo="login" id="modal2">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="titulo">
            <h1>EDITAR PRODUTO</h1>
          </div>

          {produtoDemanda == true ? (
            <></>
          ) : (
            <div className="input-field">
              <label htmlFor="quantidade">Quantidade do produto</label>
              <Field name="quantidade" type="text" />
            </div>
          )}

          <div className="input-field">
            <div className="div-radio">
              <p>
                <label htmlFor="Disponivel">
                  <Field
                    name="status"
                    type="radio"
                    value="Disponivel"
                    id="Disponivel"
                  />
                  <span>Disponivel</span>
                </label>
              </p>
              <p>
                <label htmlFor="Indisponivel">
                  <Field
                    name="status"
                    type="radio"
                    value="Indisponivel"
                    id="Indisponivel"
                  />
                  <span>Indisponivel</span>
                </label>
              </p>
            </div>
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
