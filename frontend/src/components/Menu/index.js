import React from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdShoppingBasket, MdPermIdentity } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";

import SideBar from "../SideBar";

import "./styles.css";

const PhotoUserLogged = ({ url }) => {
  return (
    <div className="container-foto">
      {url ? (
        <img src={`${url}`} alt="Foto de perfil" className="foto-perfil" />
      ) : (
        <MdPermIdentity />
      )}
    </div>
  );
};
const BtnLogin = () => (
  <Link class="waves-effect waves-light btn btn-entrar">
    <span className="txt-btn-entrar">
      <FiLogIn className="icon-entrar" />
      Entrar
    </span>
  </Link>
);
const MenuVendedor = () => (
  <div className="nav-content menu-vendedor">
    <ul className="tabs  tabs-transparent ul-menu-vendedor">
      <li className="tab">
        <Link>Meus Produtos</Link>
      </li>
      <li className="tab">
        <Link>Meus Pedidos</Link>
      </li>
      <li className="tab">
        <Link>Meu comercio</Link>
      </li>
    </ul>
  </div>
);

const Menu = ({ user = {} }) => {
  return (
    <>
      <nav className="nav-extended nav-menu">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left ">
            <li>
              <div
                className="sidenav-trigger btn-menu-categorias "
                data-target="slide-out"
              >
                <MdMenu />
              </div>
            </li>
          </ul>
          <div className="brand-logo">Logo</div>

          <ul className="right ">
            <li>
              <div className="hide-on-med-and-down btn-meu-carrinho">
                <MdShoppingBasket />
              </div>
            </li>
            <li>{user ? <PhotoUserLogged url={user.url} /> : <BtnLogin />}</li>
          </ul>
        </div>
        {user.idComercio && <MenuVendedor />}
        <SideBar />
      </nav>
    </>
  );
};

export default Menu;
