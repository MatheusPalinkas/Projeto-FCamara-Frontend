import React from "react";
import { Link } from "react-router-dom";

const MenuCliente = ({ id }) => (
  <div className="nav-content menu-vendedor">
    <ul className="tabs  tabs-transparent ul-menu-vendedor">
      <li className="tab">
        <Link to={`/comercios/favoritos/${id}`}>Meus Favoritos</Link>
      </li>
      <li className="tab">
        <Link to={`/pedidos/vendedor/${id}`}>Meus Pedidos</Link>
      </li>
      <li className="tab">
        <Link to={"/editar/conta"}>Minha conta</Link>
      </li>
    </ul>
  </div>
);

export default MenuCliente;
