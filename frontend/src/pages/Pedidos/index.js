import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { MdReply } from "react-icons/md";

import TablePedido from "../../components/TablePedido";
import Button from "../../components/Button";

import "./styles.css";

export default function Pedidos() {
  const { id } = useParams();
  const { tipoUsuario } = useParams();
  const { goBack } = useHistory();

  return (
    <>
      <div className="containerBtnTable">
        <Button
          text="VOLTAR"
          typeButton="secundaria"
          Icon={MdReply}
          onClick={(e) => {
            e.preventDefault();
            goBack();
          }}
        />
      </div>
      <div className="containerTable">
        <TablePedido id={id} tipoUsuario={tipoUsuario} />
      </div>
    </>
  );
}
