import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import { listarCategorias } from "../../services/categorias";

import "./styles.css";

export default function PesquisaHome({ txtFiltro, handleChangeFilter }) {
  const [categoria, setCategoria] = useState([]);

  const getCategorias = useCallback(async () => {
    const data = await listarCategorias();
    setCategoria(data);
  }, []);

  useEffect(() => {
    getCategorias();
  }, [getCategorias]);

  useEffect(() => {
    (async function () {
      const elems = document.querySelectorAll(".collapsible");
      M.Collapsible.init(elems, {});
    })();
  }, []);

  return (
    <>
      <div className="containerPesquisar">
        <form className="formPesquisar">
          <div className="input-field">
            <label htmlFor="filtro">Pesquisar pelo nome de um comercio</label>
            <input
              type="text"
              nome="filtro"
              className="input-filtro"
              value={txtFiltro}
              onChange={handleChangeFilter}
            />
          </div>
        </form>
        <ul className="carrosel-categorias">
          {categoria.map((categoria) => (
            <li key={categoria.id} className="li-link-categoria">
              <Link to={`/home/${categoria.id}`}>{categoria.nome}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
