import React, {useEffect} from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import "./styles.css";

export default function Button({onClick, typeButton = "primaria", Icon, text="ENTRAR", position="top", tooltip=`Botão de ${text}`}) {
  
    useEffect(() => { 
      const elems = document.querySelectorAll('.tooltipped');
      M.Tooltip.init(elems, {});
    }, [])

    let classButton = "btn";

    if(typeButton === "primaria") {
        classButton += " btn-primaria"; 
      }  
      else { 
        if(typeButton === "secundaria") {
          classButton += " btn-secundario";
      } 
      else {
        classButton += " btn-desabilitado";
      }
    }

    return (
      <>
        <button  className="tooltipped btn" 
            data-position={`${position}`} 
            data-tooltip={`${tooltip}`}
            onClick={onClick} 
            className={classButton}>
            <div className="icon">
             {Icon && ( <Icon className="material-icons left" />)}
            </div>
            <div className="ent">
              {text}
            </div>
          </button>
        </>
      );
  }
