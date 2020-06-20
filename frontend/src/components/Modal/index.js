import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { MdClose } from "react-icons/md";

import "./styles.css";


export default function Modal({ children, tipo, id }) {

  useEffect(() => {
    const elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
    
    (async function () {
      const elem = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elem, {
        position: "left",
      });
    })();
  }, []);

  return (
    <div id={id} className={`modal ${tipo}`}>
      <div
        className="modal-close head tooltipped"
        data-position="bottom"
        data-tooltip="Fechar"
      >
        <MdClose className="close " />
      </div>
      <div className="modal-content children">
        <div className="children" align="center">
          {children}
        </div>
      </div>
    </div>
  );
}


