import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import api from "../../services/Api";

import "./styles.css";

export default function PesquisaHome() {
  const [filtro, setFiltro] = useState("");

  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    (async function () {
      const elems = document.querySelectorAll(".collapsible");
      M.Collapsible.init(elems, {});

      const { data } = await api.get("/categorias");
      setCategoria(data);
    })();
  }, []);

  return (
    <>
      <div className="containerPesquisar">
        <form className="formPesquisar">
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
        </form>
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">Categorias</div>
            {categoria.map((categoria) => (
              <div class="collapsible-body">
                <span key={categoria.id}>{categoria.nome}</span>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}
