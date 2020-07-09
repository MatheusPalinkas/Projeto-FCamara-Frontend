import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { listarCategorias } from "../../services/categorias";

import "./styles.css";

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

const SideBar = () => {
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
      const elem = document.querySelector(".sidenav");
      M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250,
      });
    })();
  }, []);

  return (
    <div>
      <ul id="slide-out" className="sidenav">
        <li className="header-categorias">
          <h2>Categorias</h2>
        </li>
        <li className="btn-voltar-categorias">
          <span className="sidenav-close link">
            <span className="txt-voltar-categorias">
              Voltar
              <MdKeyboardArrowRight />
            </span>
          </span>
        </li>
        {categoria.map((categoria) => (
          <li key={categoria.id} className="item-categoria">
            <Link
              to={`/home/${categoria.id}`}
              className="sidenav-close waves-effect"
            >
              {categoria.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
