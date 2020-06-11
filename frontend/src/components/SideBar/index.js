import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import api from "../../services/Api";

import "./styles.css";

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

const SideBar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function Data() {
      const elem = document.querySelector(".sidenav");
      M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250,
      });
      const { data } = await api.get("/categorias");
      setCategorias(data);
    }
    Data();
  }, []);

  return (
    <div>
      <ul id="slide-out" className="sidenav">
        <li className="header-categorias">
          <h2>Categorias</h2>
        </li>
        <li className="btn-voltar-categorias">
          <Link className="sidenav-close">
            <span className="txt-voltar-categorias">
              Voltar
              <MdKeyboardArrowRight />
            </span>
          </Link>
        </li>
        {categorias.map((categoria) => (
          <li key={categoria.id} className="item-categoria">
            <Link className="waves-effect">{categoria.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
