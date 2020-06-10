import React from "react";

import "./styles.css";

  export default function Button({onClick, typeButton, Icon, text}) {
    
    let classButton = "btn";

    if(typeButton === "primaria") {
        classButton += " btn-primaria"; }  
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
        <a 
          onClick={onClick} 
          className={classButton}>
            <div className="icon">
              <Icon className="material-icons left" />
            </div>
            <div className="ent">
              {text}
            </div>
          </a>
        </>
      );
  }

//como implementar o componente
//
//import Button from '../../components/Button';
// <Button 
//        onClick={() => ()}
//        typeButton=""
//        Icon={}
//        text={""}
// />;