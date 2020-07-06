import React, { useEffect, useState } from "react";
import MaskInput from "react-text-mask";
import { MdReply, MdSave } from "react-icons/md";
import { Formik, Field, ErrorMessage } from "formik";
import M from "materialize-css/dist/js/materialize.min.js";

import Button from "../../Button";

import api from "../../../services/Api";

import PropTypes from "prop-types";
import * as yup from "yup";

import "../styles.css";
import "./styles.css";

const validates = yup.object().shape({
  nome: yup.string().required("O nome do comercio é obrigadotio"),
  horaAbertura: yup.string().required("Campo obrigatório"),
  horaFechamento: yup.string().required("Campo obrigatório"),
  diasParaEntrega: yup.string().required("Campo obrigatório"),
  frete: yup.string().required("Campo obrigatório"),
  categoria: yup.string().required("A sua categoria de comercio é obrigatoria"),
  cnpj: yup.string().optional(),
});

const hoursNumberMask = [/[1-9]/, /\d/, ":", /\d/, /\d/];

const FormDadosComercio = ({
  initialValues,
  handleSubmit,
  handleBackStage,
}) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await api.get("/categoria");
      setCategorias(data);

      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
      M.updateTextFields();
    })();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validates}
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-dados-cadastro form-dados-pessoais">
            <div className="input-field">
              <label htmlFor="nome">Nome do comercio</label>
              <Field type="text" id="nome" name="nome" />
              <ErrorMessage
                className="helper-text"
                name="nome"
                component="span"
              />
            </div>
            <div className="input-field">
              <label htmlFor="frete">Valor cobrado de frete</label>
              <Field type="text" id="frete" name="frete" />
              <ErrorMessage
                className="helper-text"
                name="frete"
                component="span"
              />
            </div>
            <div className="input-field">
              <label htmlFor="diasParaEntrega">
                Quantos dias leva para fazer a entrega ?
              </label>
              <Field type="text" id="diasParaEntrega" name="diasParaEntrega" />
              <ErrorMessage
                className="helper-text"
                name="diasParaEntrega"
                component="span"
              />
            </div>
            <div className="input-field">
              <label className="label-hora">Horario de funcionamento</label>
              <div className="div-buttons-form hr-funcionamento">
                <div className="input-field">
                  <Field name="horaAbertura">
                    {({ field }) => (
                      <MaskInput
                        {...field}
                        type="text"
                        id="horaAbertura"
                        mask={hoursNumberMask}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    className="helper-text"
                    name="horaAbertura"
                    component="span"
                  />
                </div>
                <div className="input-field lbl-ate">
                  <label className="label-hora">Até</label>

                  <div className="input-field">
                    <Field name="horaFechamento">
                      {({ field }) => (
                        <MaskInput
                          {...field}
                          type="text"
                          id="horaFechamento"
                          mask={hoursNumberMask}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      className="helper-text"
                      name="horaFechamento"
                      component="span"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="input-field">
              <div className="input-field ">
                <Field as="select" id="categoria" name="categoria">
                  <option value={false}>Selecione uma categoria</option>
                  {categorias.map((categoria) => (
                    <option value={categoria.id} key={categoria.id}>
                      {categoria.nome}
                    </option>
                  ))}
                </Field>
              </div>
              <ErrorMessage
                className="helper-text"
                name="categoria"
                component="span"
              />
            </div>
            <div className="input-field divPssuiCnpj">
              <label className="labelCnpj">Possui CNPJ?</label>
              <div className="div-radio">
                <p>
                  <label htmlFor="sim">
                    <Field
                      name="possuiCnpj"
                      type="radio"
                      value="sim"
                      id="sim"
                    />
                    <span>Sim</span>
                  </label>
                </p>
                <p className="p-nao-tenho-cnpj">
                  <label htmlFor="nao">
                    <Field
                      name="possuiCnpj"
                      type="radio"
                      value="nao"
                      id="nao"
                    />
                    <span>Não</span>
                  </label>
                </p>
              </div>
              {values.possuiCnpj === "sim" ? (
                <div className="input-field">
                  <label htmlFor="cnpj">CNPJ</label>
                  <Field type="text" id="cnpj" name="cnpj" />
                  <ErrorMessage
                    className="helper-text"
                    name="cnpj"
                    component="span"
                  />
                </div>
              ) : (
                <p className="p-nao-tem-cnpj">
                  O CNPJ não é obrigatório para o cadastro, porém damos
                  prioridade aos vendedores que possuem CNPJ.
                  <a
                    href="http://www.receita.fazenda.gov.br/PessoaJuridica/cnpj/ConvenJuntaBH/InscCNPJOrientacoes.htm"
                    target="blank"
                  >
                    Clique aqui e confira como tirar seu CNPJ
                  </a>
                </p>
              )}
              <ErrorMessage
                className="helper-text"
                name="possuiCnpj"
                component="span"
              />
            </div>
            <div className="input-field inputs-formas-pagamento">
              <label className="label-formas-pagamento">
                Quais formas de pagamento vc aceita
              </label>
              <div className="div-radios-form div-formas-pagamento">
                <p>
                  <label htmlFor="pagamentoCartao">
                    <Field
                      name="pagamentoCartao"
                      type="checkbox"
                      value="pagamentoCartao"
                      id="pagamentoCartao"
                    />
                    <span>Cartão</span>
                  </label>
                </p>
                <p>
                  <label htmlFor="pagamentoDinheiro">
                    <Field
                      name="pagamentoDinheiro"
                      type="checkbox"
                      value="pagamentoDinheiro"
                      id="pagamentoDinheiro"
                    />
                    <span>Dinheiro</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="div-buttons-form buttons-comercio">
              <Button
                tipo="Link"
                onClick={handleBackStage}
                text="Voltar"
                typeButton="secundaria"
                Icon={MdReply}
              />
              <Button
                submit="submit"
                text="Finalizar"
                tooltip="Finalizar cadastro"
                Icon={MdSave}
              />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

FormDadosComercio.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleBackStage: PropTypes.func.isRequired,
};

export default FormDadosComercio;
