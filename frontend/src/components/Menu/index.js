import React from "react";
import { MdMenu, MdClose, MdSearch, MdShoppingBasket } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

export default function Menu() {
  return (
    <>
      <nav>
        <div className="nav-wrapper div-menu">
          <div className="btn-menu-burger">
            <MdMenu />
          </div>
          <a href="#!" className="brand-logo">
            Logo
          </a>
          <div>
            <form action="">
              <div className="input-field">
                <input id="search" type="search" required></input>
                <label class="label-icon" for="search">
                  <MdSearch />
                </label>
                <MdClose />
              </div>
            </form>
          </div>
          <div className="btn-menu-burger">
            <MdShoppingBasket />
          </div>
          <a class="waves-effect waves-light btn">
            <FiLogIn className="material-icons left" />
            Entrar
          </a>
        </div>
      </nav>
    </>
  );
}
