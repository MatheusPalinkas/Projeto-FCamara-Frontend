import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form as FormikForm, Field } from "formik";
import "./styles.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Modal from "../Modal";
import Button from "../Button";

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
    })();
  }, []);

  return (
    <Modal tipo={"login"} id={"modal2"}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormikForm>
          <div className="titulo">
            <h1>ESTOQUE</h1>
          </div>

          <div className="formLogin">
            <label>Quantidade</label>
          </div>
          <div className="formLogin">
            <Field
              name="quantidade"
              placeholder="Digite a quantidade do produto"
              type="text"
            />
          </div>

          <div className="formLogin">
            <label>Status</label>
          </div>
          <div className="formLogin">
            <Field as="select" name="status">
              <option>Status</option>
              <option value="Disponivel">Disponivel</option>
              <option value="Indisponivel">Indisponivel</option>
              <option value="Encomenda">Encomenda</option>
            </Field>
          </div>

          <div className="containerBtnLogin">
            <div className="btnLogin">
              <Button
                position="bottom"
                tooltip="Salvar alteraçoes"
                type={"submit"}
                typeButton={"secundaria"}
                submit="submit"
                text={"SALVAR"}
              />
            </div>
          </div>
        </FormikForm>
      </Formik>
    </Modal>
  );
};

ModalEstoque.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default ModalEstoque;
