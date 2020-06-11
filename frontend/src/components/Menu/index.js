import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdShoppingBasket, MdKeyboardArrowRight } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import api from "../../services/Api";

import "./styles.css";

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

const SideBar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function Data() {
      const elem = document.querySelector(".sidenav");
      const instance = M.Sidenav.init(elem, {
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
          <Link class="sidenav-close">
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

export default function Menu() {
  return (
    <>
      <nav className="nav-menu">
        <div className="nav-wrapper">
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li>
              <div
                className="sidenav-trigger btn-menu-categorias"
                data-target="slide-out"
              >
                <MdMenu />
              </div>
            </li>
          </ul>
          <div className="brand-logo">Logo</div>

          <ul class="right hide-on-med-and-down">
            <li>
              <div className="btn-meu-carrinho">
                <MdShoppingBasket />
              </div>
            </li>
            <li>
              <Link class="waves-effect waves-light btn btn-entrar">
                <span className="txt-btn-entrar">
                  <FiLogIn className="icon-entrar" />
                  Entrar
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <SideBar />
    </>
  );
}
