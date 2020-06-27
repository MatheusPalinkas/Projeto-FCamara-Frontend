import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import M from "materialize-css/dist/js/materialize.min.js";
import { MdMenu, MdShoppingBasket, MdPermIdentity } from "react-icons/md";

import ModalLogin from "../../components/ModalLogin";
import MenuVendedor from "./MenuVendedor";
import MenuCliente from "./MenuCliente";
import SideBar from "../SideBar";
import Button from "../Button";

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
        <div className="nav-wrapper div-nav-wrapper">
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
              <Link
                className="tooltipped btn-meu-carrinho"
                data-position="left"
                data-tooltip="Meu carrinho"
                to="/carrinho"
              >
                <MdShoppingBasket />
              </Link>
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
        {!!user.comercio ? (
          <MenuVendedor idComercio={user.comercio.idComercio} />
        ) : (
          user.id && <MenuCliente id={user.id} />
        )}
        <SideBar />
      </nav>
      <ModalLogin />
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Menu);
