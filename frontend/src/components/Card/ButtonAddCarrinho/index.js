import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import M from "materialize-css/dist/js/materialize.min.js";

import { ADD_ITEM_CART } from "../../../store/actions/carrinho";

const ButtonAddCarrinho = ({ item, handleAdd }) => {
  useEffect(() => {
    (async function () {
      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "bottom",
      });
    })();
  }, []);

  return (
    <button
      className="tooltipped div-add-carrinho"
      data-position="top"
      data-tooltip="adicionar ao carrinho"
      onClick={(e) => {
        e.preventDefault();
        handleAdd(item.id, { ...item, nome: item.titulo, quantidade: 1 });
      }}
    >
      <MdShoppingCart className="add-carrinho" />
    </button>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleAdd: (id, item) => dispatch(ADD_ITEM_CART(id, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddCarrinho);
