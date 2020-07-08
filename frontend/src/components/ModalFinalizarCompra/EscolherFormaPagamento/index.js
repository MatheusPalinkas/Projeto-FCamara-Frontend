import React from "react";
import * as yup from "yup";
import { MdSave, MdReply } from "react-icons/md";
import { Formik, Form, Field } from "formik";

import Button from "../../Button";

import "./styles.css";

const validates = yup.object().shape({
  formaPagamento: yup.string().required("A forma de pagamento é obrigatorio"),
  observacao: yup.string().optional(),
});
const frete = 20;
const valorSemFrete = 200;

function EscolherFormaPagamento({ initialValues, onSubmit, handleBack }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validates}
      onSubmit={onSubmit}
    >
      <Form className="form-escolher-forma-pagamento">
        <div className="div-mostrar-valores-pedido">
          <label>Frete</label>
          <span>
            {frete.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div className="div-mostrar-valores-pedido">
          <label>Tempo estimado da entrega:</label>
          <span className="span-tempo-entrega-pedido">20</span>
        </div>
        <div className="div-mostrar-valores-pedido">
          <label>Valor total:</label>
          <span>
            {(valorSemFrete + frete).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div className="input-field inputs-formas-pagamento-finalizar-pedido">
          <label className="label-formas-pagamento-finalizar-pedido">
            Qual a forma de pagamento:
          </label>
          <div className="div-formas-pagamento-finalizar-pedido">
            <p>
              <label htmlFor="pagamentoCartao">
                <Field
                  name="formaPagamento"
                  type="radio"
                  value="cartao"
                  id="pagamentoCartao"
                />
                <span>Cartão</span>
              </label>
            </p>
            <p>
              <label htmlFor="pagamentoDinheiro">
                <Field
                  name="formaPagamento"
                  type="radio"
                  value="dinheiro"
                  id="pagamentoDinheiro"
                />
                <span>Dinheiro</span>
              </label>
            </p>
          </div>
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
        <div
          className="div-buttons-forma-pagamento-finzalizar-pedido
        btns-voltar-seguir-finalizar-compra"
        >
          <Button
            text="Voltar"
            Icon={MdReply}
            typeButton="secundaria"
            onClick={handleBack}
          />

          <Button
            submit="submit"
            type="submit"
            text="Salvar"
            tooltip="Salvar endereço"
            className="btn-continuar-finalizar-compra"
            Icon={MdSave}
          />
        </div>
      </Form>
    </Formik>
  );
}

export default EscolherFormaPagamento;
