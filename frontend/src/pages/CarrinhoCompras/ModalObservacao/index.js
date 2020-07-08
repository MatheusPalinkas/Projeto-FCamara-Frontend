import React from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { UPDATE_OBSERVACAO_ITEM_CART } from "../../../store/actions/carrinho";

import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

import "./styles.css";

const validations = yup.object().shape({
  observacao: yup.string().optional(),
});

const ModalObservacao = ({ itemSelected, items, handleUpdateObservacao }) => {
  const handleSubmit = async (values) => {
    const { observacao } = values;
    handleUpdateObservacao(itemSelected, observacao);
  };

  return (
    <Modal tipo="login" id="modal-observacoes">
      <Formik
        initialValues={{
          observacao: items.filter((item) => item.id === itemSelected) || "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="form-modal-observacao">
          <div className="titulo">
            <h1>OBSERVAÇÕES</h1>
          </div>
          <div className="input-field input-observacoes">
            <label htmlFor="observacao">Observações</label>
            <Field
              name="observacao"
              className="materialize-textarea"
              type="text"
              id="observacao"
            />
          </div>

          <div className="containerBtnObservacoes">
            <div className="modal-close btnLogin">
              <Button
                position="bottom"
                tooltip="Salvar comentario"
                type="submit"
                submit="submit"
                text="Salvar"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  items: state.carrinho.items,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateObservacao: (id, observacao) =>
    dispatch(UPDATE_OBSERVACAO_ITEM_CART(id, observacao)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalObservacao);
