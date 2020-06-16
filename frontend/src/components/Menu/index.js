import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdShoppingBasket, MdPermIdentity } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import Button from "../Button";
import M from "materialize-css/dist/js/materialize.min.js";

import ModalLogin from "../../components/ModalLogin";

import SideBar from "../SideBar";

import "./styles.css";

const handleSubmit = (values) => alert(JSON.stringify(values));
const initialValues = {};

const PhotoUserLogged = ({ url }) => {
  return (
    <div
      className="tooltipped container-foto"
      data-position="bottom"
      data-tooltip="Editar meu perfil"
    >
      {url ? (
        <img src={`${url}`} alt="Foto de perfil" className="foto-perfil" />
      ) : (
        <MdPermIdentity />
      )}
    </div>
  );
};

const MenuVendedor = () => (
  <div className="nav-content menu-vendedor">
    <ul className="tabs  tabs-transparent ul-menu-vendedor">
      <li className="tab">
        <Link to="/produto/vendedor">Meus Produtos</Link>
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
  useEffect(() => {
    (async function () {
      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "bottom",
      });
    })();
  }, []);

  return (
    <>
      <nav className="nav-extended nav-menu">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left ">
            <li>
              <div
                className="sidenav-trigger tooltipped btn-menu-categorias "
                data-target="slide-out"
                data-position="bottom"
                data-tooltip="Menu de categorias"
              >
                <MdMenu />
              </div>
            </li>
          </ul>
          <div className="brand-logo">Logo</div>

          <ul className="right ">
            <li>
              <div
                className="hide-on-med-and-down  tooltipped btn-meu-carrinho"
                data-position="bottom"
                data-tooltip="Meu carrinho"
              >
                <MdShoppingBasket />
              </div>
            </li>
            <li>
              {user.id ? (
                <PhotoUserLogged url={user.url} />
              ) : (
                <Button
                  Icon={FiLogIn}
                  tipo="Button"
                  position="bottom"
                  tooltip="Entrar na minha conta"
                  className="btn-entrar-conta"
                  dataTarget="modal1"
                />
              )}
            </li>
          </ul>
        </div>
        {user.idComercio && <MenuVendedor />}
        <SideBar />
      </nav>
      <ModalLogin handleSubmit={handleSubmit} initialValues={initialValues} />
    </>
  );
};

export default Menu;
