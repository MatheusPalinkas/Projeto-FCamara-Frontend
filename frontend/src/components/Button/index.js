import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import "./styles.css";

export default function Button({
  onClick,
  typeButton = "primaria",
  Icon,
  text = "ENTRAR",
  position = "top",
  tooltip = `Botão de ${text}`,
  tipo,
  type,
}) {
  useEffect(() => {
    (async function () {
      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "left",
      });
    })();
  }, []);

  let classButton = "button";

  if (typeButton === "primaria") {
    classButton += " btn-primaria";
  } else {
    if (typeButton === "secundaria") {
      classButton += " btn-secundario";
    } else {
      classButton += " btn-desabilitado";
    }
  }

  if(tipo === "submit"){
    return(
      <button 
      className={`tooltipped waves-light waves-effect btn ${classButton} `}
      data-position={`${position}`}
      type="submit"
      data-tooltip={`${tooltip}`}
      data-target="modal1" >
        <span className="text-align-btn">
        <div className="icon">
              {Icon && <Icon className="material-icons left" />}
            </div>
            {text}
        </span>
        </button>
      );

  } else {
  if(tipo === "login"){ 
    return(
    <button 
    className={`modal-trigger tooltipped waves-light waves-effect btn ${classButton} `}
    data-position={`${position}`}
    data-tooltip={`${tooltip}`}
    data-target="modal1" >
      <span className="text-align-btn">
      <div className="icon">
            {Icon && <Icon className="material-icons left" />}
          </div>
          {text}
      </span>
      </button>
    );
  } else {
    return (
      <Link
        className={`tooltipped btn ${classButton} `}
        data-position={`${position}`}
        data-tooltip={`${tooltip}`}
        onClick={onClick}
      >
        <span className="text-align-btn">
          <div className="icon">
            {Icon && <Icon className="material-icons left" />}
          </div>
          {text}
        </span>
      </Link>
    );
  }
}
}

