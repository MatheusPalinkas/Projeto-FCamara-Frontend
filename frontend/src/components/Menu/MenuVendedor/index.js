import React from "react";
import { Link } from "react-router-dom";

const MenuVendedor = ({ idComercio }) => (
  <div className="nav-content menu-vendedor">
    <ul className="tabs  tabs-transparent ul-menu-vendedor">
      <li className="tab">
        <Link to={`/produto/vendedor/${idComercio}`}>Produtos</Link>
      </li>
      <li className="tab">
        <Link to={`/pedidos/comercio/${idComercio}`}>Pedidos</Link>
      </li>
      <li className="tab">
        <Link to={"/editar/conta"}>Minha conta</Link>
      </li>
    </ul>
  </div>
);

export default MenuVendedor;
