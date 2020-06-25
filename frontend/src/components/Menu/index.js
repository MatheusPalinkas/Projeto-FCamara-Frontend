import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import M from "materialize-css/dist/js/materialize.min.js";
import { MdMenu, MdShoppingBasket, MdPermIdentity } from "react-icons/md";

import ModalLogin from "../../components/ModalLogin";
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

const MenuVendedor = ({ idComercio }) => (
  <div className="nav-content menu-vendedor">
    <ul className="tabs  tabs-transparent ul-menu-vendedor">
      <li className="tab">
        <Link to={`/produto/vendedor/${idComercio}`}>Meus Produtos</Link>
      </li>
      <li className="tab">
        <Link to={`/pedidos/vendedor/${idComercio}`}>Meus Pedidos</Link>
      </li>
      <li className="tab">
        <Link to={"/editar/conta"}>Minha conta</Link>
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
              <div
                className="tooltipped btn-meu-carrinho"
                data-position="left"
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
        {user.idComercio && <MenuVendedor idComercio={user.idComercio} />}
        <SideBar />
      </nav>
      <ModalLogin />
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Menu);
