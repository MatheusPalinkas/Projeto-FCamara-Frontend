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
}) {
  useEffect(() => {
    (async function () {
      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "left",
      });
    })();
  }, []);

  let classButton = "btn";

  if (typeButton === "primaria") {
    classButton += " btn-primaria";
  } else {
    if (typeButton === "secundaria") {
      classButton += " btn-secundario";
    } else {
      classButton += " btn-desabilitado";
    }
  }
  return (
    <>
      <Link
        className={`tooltipped btn ${classButton}`}
        data-position={`${position}`}
        data-tooltip={`${tooltip}`}
        onClick={onClick}
      >
        <div className="icon">
          {Icon && <Icon className="material-icons left" />}
        </div>
        <div className="ent">{text}</div>
      </Link>
    </>
  );
}
