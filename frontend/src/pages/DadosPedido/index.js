import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/Api";
import "./styles.css";

import Button from "../../components/Button";

export default function DadosPedido() {
  const [produtos, setProdutos] = useState([]);
  const { idComercio } = useParams();

  useEffect(() => {
    (async function () {
      let filtro = "";

      if (idComercio) filtro = `?idComercio=${idComercio}`;

      const { data } = await api.get(`/produtos${filtro}`);
      setProdutos(data);
    })();
  }, [idComercio]);

  return (
    <>
      <div className="containerBtnPedido">
        <div className="btnVendedorPedido">
          <Button text={"Status do pedido"} typeButton={"secundaria"} />
        </div>
      </div>

      <h1>Dados do comprador</h1>
      <h2>Nome:</h2>
      <h2>CPF:</h2>
    </>
  );
}
