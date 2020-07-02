import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const BtnFavoritar = () => {
  const [curtido, setCurtido] = useState(true);

  return (
    <div className="div-add-carrinho">
      {curtido ? (
        <MdFavorite
          className="produtoCurtido"
          onClick={(e) => {
            e.preventDefault();
            setCurtido(false);
          }}
        />
      ) : (
        <MdFavoriteBorder
          className="produtoCurtido"
          onClick={(e) => {
            e.preventDefault();
            setCurtido(true);
          }}
        />
      )}
    </div>
  );
};

export default BtnFavoritar;
