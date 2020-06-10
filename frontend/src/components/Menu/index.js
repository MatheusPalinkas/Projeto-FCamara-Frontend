import React from "react";
import { MdMenu, MdShoppingBasket } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

export default function Menu() {
  return (
    <>
      <nav className="nav-menu">
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li>
              <div className="btn-menu-categorias">
                <MdMenu />
              </div>
            </li>
          </ul>
          <a href="#!" class="brand-logo">
            Logo
          </a>

          <ul class="right hide-on-med-and-down">
            <li>
              <div className="btn-meu-carrinho">
                <MdShoppingBasket />
              </div>
            </li>
            <li>
              <a class="waves-effect waves-light btn btn-entrar">
                <FiLogIn className="icon-entrar" />
                Entrar
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
