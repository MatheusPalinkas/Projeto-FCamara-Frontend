import React from "react";
import { Link } from "react-router-dom";

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

export default MenuVendedor;
