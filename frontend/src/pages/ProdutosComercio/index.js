import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MdReply, MdFavorite } from "react-icons/md";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import api from "../../services/Api";

import Card from "../../components/Card";
import Button from "../../components/Button";

import "./styles.css";

const ProdutosComercio = ({ user }) => {
  const [filtro, setFiltro] = useState("");
  const [categoriaSelecionada, setcategoriaSelecionada] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const { idComercio } = useParams();
  const { goBack } = useHistory();

  const cnpj = null;

  useEffect(() => {
    (async function () {
      let urlFiltro = "";
      urlFiltro += !!filtro ? `&nome=${filtro}` : "";
      urlFiltro += !!categoriaSelecionada
        ? `&idCategoria=${categoriaSelecionada}`
        : "";

      const [dataProdutos, dataCategorias] = await Promise.all([
        api.get(`/produtos?idComercio=${idComercio}${urlFiltro}`),
        api.get("/categorias"),
      ]);

      setCategorias(dataCategorias.data);
      setProdutos(dataProdutos.data);

      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
    })();
  }, [idComercio, filtro, categoriaSelecionada]);

  return (
    <>
      <div className="container-btn-voltar">
        <form className="form-filtros">
          <div className="input-field">
            <label htmlFor="filtro">Pesquisar pelo nome de um produto</label>
            <input
              type="text"
              nome="filtro"
              className="input-filtro"
              value={filtro}
              onChange={(e) => {
                setFiltro(e.target.value);
              }}
            />
          </div>
          <div className="input-field div-select-filtro">
            <select
              value={categoriaSelecionada}
              onChange={(e) => setcategoriaSelecionada(e.target.value)}
            >
              <option value={0}>Filtrar por uma categoria</option>

              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>
          <Button
            text="VOLTAR"
            typeButton="secundaria"
            Icon={MdReply}
            onClick={(e) => {
              e.preventDefault();
              goBack();
            }}
          />
        </form>

        {Object.keys(user).length !== 0 && user.comercio === undefined && (
          <div className="div-add-favoritos-comercio">
            {cnpj === null ? (
              <label>Este vendedor não possui CNPJ</label>
            ) : (
              <label></label>
            )}
            <Button
              Icon={MdFavorite}
              text="Adicionar aos favoritos"
              className="btn-add-favoritos"
            />
          </div>
        )}
      </div>

      <div className="container-comercios">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            titulo={produto.nome}
            url={produto.url}
            descricao={produto.descricao}
            produto={{ preco: produto.preco }}
          />
        ))}
      </div>

      <div className="containerSobreComercio">
        <div className="dados-comercio">
          <h2>Sobre o comercio</h2>
          <div className="dadosComprador">
            <label className="descricaoDado">Nome:</label>
            <p>Jose</p>
          </div>

          <div className="dadosComprador">
            <label className="descricaoDado">CPF/CNPJ:</label>
            <p>999.999.999-99</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">
              Formas de pagamentos aceitos:
            </label>
            <p>cartão e dinheiro</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">Numero:</label>
            <p>99999-9999</p>
          </div>
          <div className="dadosComprador">
            <label className="descricaoDado">email:</label>
            <p>Jose@teste.com</p>
          </div>
        </div>

        <div className="dados-comercio">
          <h2>Endereço</h2>
          <div className="dadosComercio">
            <label className="descricaoDado">CEP:</label>
            <p>99999-999</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Cidade:</label>
            <p>Santos</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Logradouro:</label>
            <p>Rua sei la</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Complemento:</label>
            <p></p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">UF:</label>
            <p>SP</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">Bairo:</label>
            <p>logo ali</p>
          </div>
          <div className="dadosComercio">
            <label className="descricaoDado">N°:</label>
            <p>999</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProdutosComercio);
