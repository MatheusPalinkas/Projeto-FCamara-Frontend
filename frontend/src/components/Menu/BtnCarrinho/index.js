import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import { MdShoppingBasket } from "react-icons/md";

const BtnCarrinho = ({ quantidadeTotal }) => {
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    (async function () {
      await setQuantidade(quantidadeTotal);
      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "bottom",
      });
    })();
  }, [quantidadeTotal, quantidade]);

  return (
    <Link
      className="tooltipped btn-meu-carrinho"
      data-position="left"
      data-tooltip="Meu carrinho"
      to="/carrinho"
    >
      <MdShoppingBasket />
      {!!quantidade && (
        <span className="span-quantidade-carrinho">
          {quantidade > 99 ? "+99" : quantidade}
        </span>
      )}
    </Link>
  );
};

const mapStateToProps = (state) => ({
  quantidadeTotal: state.carrinho.total,
});

export default connect(mapStateToProps)(BtnCarrinho);
