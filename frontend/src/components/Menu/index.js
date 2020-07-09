import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import { MdPermIdentity, MdMenu } from "react-icons/md";

import ModalLogin from "../../components/ModalLogin";
import MenuVendedor from "./MenuVendedor";
import MenuCliente from "./MenuCliente";
import BtnCarrinho from "./BtnCarrinho";
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

const Menu = ({ user = {}, quantidadeItemsCarrinho = 0 }) => {
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
            <li>
              <div
                className="tooltipped btn-logo-pagina-inicial "
                data-position="bottom"
                data-tooltip="Pagina inicial"
              >
                <Link to="/">Mercado Fácil</Link>
              </div>
            </li>
          </ul>

          <ul className="right ">
            <li>
              <BtnCarrinho />
            </li>
            <li>
              {user.id ? (
                <PhotoUserLogged url={user.url} />
              ) : (
                <Button
                  tipo="Button"
                  position="bottom"
                  tooltip="Entrar na minha conta"
                  className="btn-entrar-conta"
                  dataTarget="modal1"
                  id="btn-login-entrar"
                />
              )}
            </li>
          </ul>
        </div>
        {!!user.comercio ? (
          <MenuVendedor idComercio={user.comercio.id} />
        ) : (
          user.id && <MenuCliente id={user.id} />
        )}
        <SideBar />
      </nav>
      <ModalLogin />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Menu);
